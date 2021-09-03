import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosLancamentosComponent } from './relatorios-lancamentos/relatorios-lancamentos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RelatoriosLancamentosComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
