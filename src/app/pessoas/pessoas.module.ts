import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasRoutingModule } from './pessoas-routing.module';


@NgModule({
  declarations: [PessoasPesquisaComponent, PessoasCadastroComponent],
  imports: [
    CommonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    ButtonModule,
    InputTextModule,
    PessoasRoutingModule
  ],
})
export class PessoasModule {}
