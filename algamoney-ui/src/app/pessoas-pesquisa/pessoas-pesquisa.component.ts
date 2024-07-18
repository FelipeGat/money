import { Component } from '@angular/core';

import { LazyLoadEvent, MessageService } from 'primeng/api';
import { PessoaFiltro, PessoaService } from './pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css'],
})
export class PessoasPesquisaComponent {
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas: any[] = [];

  constructor(private messageService: MessageService, private pessoaService: PessoaService, private router: Router) {}

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.pessoaService
      .pesquisar(this.filtro)
      .then((dados: any) => {
        console.log(dados);
        this.pessoas = dados.pessoas;
        this.totalRegistros = dados.total;
        this.messageService.add({severity:'success', summary:'Sucesso', detail: 'Foi o bagui', closable: false, life: 6000})
      })
      .catch((e) => {
        console.log(e);
      });
  }

    aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event!.first! / event!.rows!;
      this.pesquisar(pagina);
  }

  cadastroPessoa(){
    this.router.navigate(['/pessoa-cadastro'])
  }
}
