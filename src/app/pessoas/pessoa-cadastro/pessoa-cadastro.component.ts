import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../../core/model';


@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private rota: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova Pessoa')
    const codigoPessoa = this.rota.snapshot.params['codigo'];

    if (codigoPessoa) {
      if(isNaN(codigoPessoa)) {
        this.router.navigate(['/pagina-nao-encontrada']);
        return;
      }
      this.carregarPessoa(codigoPessoa)
    }
  }
  get editando () {
    return Boolean(this.pessoa.codigo)
  }

  salvar(form: NgForm){
    if (this.editando) {
      this.atualizarPessoa(form);
    }else{
      this.adicionarPessoa(form);
    }
  }
  carregarPessoa(codigo: number){
    this.pessoaService.buscarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  adicionarPessoa(form: NgForm) {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });

        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarPessoa(form: NgForm) {
    this.pessoaService.atualizar(this.pessoa)
      .then(lancamento => {

        this.atualizarTituloEdicao();
        this.pessoa = lancamento;
        this.messageService.add({ severity: 'success', detail: 'Lançamento atualizado com sucesso!' });


      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(function() {
      this.lancamento = new Pessoa();
    }.bind(this), 1);

    this.router.navigate(['/pessoas/novo']);
  }
  atualizarTituloEdicao(){
    this.title.setTitle(`Editar pessoa: ${this.pessoa.nome}`)
  }

}
