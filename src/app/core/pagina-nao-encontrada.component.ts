import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <div class="container text-center" >
      <h1>Página não encontrada</h1>

      <button pButton class="p-button-raised p-button-secondary padding" type="text" label="Pesquisar Lancamentos" routerLink="/lancamentos" ></button>
      <button pButton class="p-button-raised p-button-secondary padding" type="text" label="Pesquisar Pessoas" routerLink="/pessoas"></button>

    </div>
  `,
  styles: [
  ]
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
