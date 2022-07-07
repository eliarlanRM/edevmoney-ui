import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lancamentos',
    loadChildren: () => import('./lancamentos/lancamentos.module').then((m) => m.LancamentosModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then((m) => m.PessoasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
