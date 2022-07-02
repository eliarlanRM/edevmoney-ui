import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';

@NgModule({
  declarations: [LancamentosPesquisaComponent, LancamentosCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    TableModule,
    TooltipModule,

    LancamentosRoutingModule
  ],
})
export class LancamentosModule {}
