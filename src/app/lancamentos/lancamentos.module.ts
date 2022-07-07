import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosRoutingModule } from './lancamentos-routing.module';

@NgModule({
  declarations: [LancamentosPesquisaComponent, LancamentosCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    CalendarModule,
    TableModule,
    TooltipModule,

    LancamentosRoutingModule,
  ],
})
export class LancamentosModule {}
