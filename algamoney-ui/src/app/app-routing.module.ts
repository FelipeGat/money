import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LoginComponent } from './login/login.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'lancamentos', component: LancamentosPesquisaComponent},
  { path: 'lancamentos-cadastro', component: LancamentoCadastroComponent},
  { path: 'pessoa-cadastro', component: PessoaCadastroComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
