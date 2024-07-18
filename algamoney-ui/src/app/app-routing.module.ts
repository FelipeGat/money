import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LoginComponent } from './login/login.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'lancamentos', component: LancamentosPesquisaComponent},
  { path: 'lancamentos-cadastro', component: LancamentoCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
