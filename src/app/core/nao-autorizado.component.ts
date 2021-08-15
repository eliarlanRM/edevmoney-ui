import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="container text-center">
    <h1>Acesso negado!</h1>
    <div>
      <button pButton class="p-button-raised p-button-secondary" type="text" label="Voltar" appBotaoVoltar></button>
    <div>
  </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
