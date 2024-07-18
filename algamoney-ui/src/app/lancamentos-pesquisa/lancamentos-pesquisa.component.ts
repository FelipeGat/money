import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from './lancamento.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(private router: Router, private lancamentoService: LancamentoService, private messageService: MessageService, private confirmation: ConfirmationService) {}

  ngOnInit() {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro).subscribe(
      resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      },
      error => {
        this.messageService.add({ severity: 'info', summary: 'Erro', detail: 'Erro ao pesquisar lançamentos' });
        console.error('Erro ao pesquisar lançamentos', error);
      }
    );
  }

  mudarPagina() {
    this.router.navigate(["/lancamentos-cadastro"])
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento:any){
    this.confirmation.confirm({
      message:'Tem certeza que deseja Excluir?',
      accept:() =>{
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.firt ===0){
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }
      })
      .catch(error => {
        console.error('Erro ao excluir lançamento', error);
      });
  }
}
