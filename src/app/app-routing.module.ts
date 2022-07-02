import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lancamentos',
    loadChildren: () =>
      import('./lancamentos/lancamentos.module').then(
        (m) => m.LancamentosModule
      ),
  },
  { path: 'pessoas', component: PessoasPesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
