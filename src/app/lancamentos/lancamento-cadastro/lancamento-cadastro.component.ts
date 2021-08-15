import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriaService } from './../../categorias/categoria.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import { Lancamento } from './../../core/model';
import { LancamentoService } from './../lancamento.service';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private rota: ActivatedRoute,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Novo Lançamento')
    const codigoLancamento = this.rota.snapshot.params['codigo'];

    if (codigoLancamento) {
      if(isNaN(codigoLancamento)) {
        this.router.navigate(['/pagina-nao-encontrada']);
        return;
      }
      this.carregarLancamento(codigoLancamento);
    }


    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando () {
    return Boolean(this.lancamento.codigo)
  }

  carregarLancamento(codigo: number){
    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCategorias(){
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map(c => {
          return { label: c.nome, value: c.codigo};
        });
      })
      .catch(erro => this.errorHandler.handle(erro))
  }
  carregarPessoas(){
    return this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map( p => {
          return { label: p.nome, value: p.codigo};
        })
      })
  }


  salvar(form: NgForm){
    if (this.editando) {
      this.atualizarLancamento(form);
    }else{
      this.adicionarLancamento(form);
    }
  }

  atualizarLancamento(form: NgForm) {
    this.lancamentoService.atualizar(this.lancamento)
      .then(lancamento => {

        this.atualizarTituloEdicao();
        this.lancamento = lancamento;
        this.messageService.add({ severity: 'success', detail: 'Lançamento atualizado com sucesso!' });


      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  adicionarLancamento(form: NgForm) {
    this.lancamentoService.adicionar(this.lancamento)
    .then(lancamentoAdicionado => {
      this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });
      this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
    })
      .catch(erro => this.errorHandler.handle(erro));
  }
  novo(form: NgForm) {
    form.reset();

    setTimeout(function() {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/novo']);
  }
  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de Lançamento: ${this.lancamento.descricao}`)
  }
}