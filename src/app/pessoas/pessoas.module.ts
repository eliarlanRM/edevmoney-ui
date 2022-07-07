import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';



@NgModule({
  declarations: [PessoasPesquisaComponent, PessoasCadastroComponent],
  imports: [
    CommonModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class PessoasModule {}
