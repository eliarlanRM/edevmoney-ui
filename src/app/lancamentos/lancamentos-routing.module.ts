import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

export const routes: Routes = [
  { path: '', component: LancamentosPesquisaComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentosRoutingModule {}
