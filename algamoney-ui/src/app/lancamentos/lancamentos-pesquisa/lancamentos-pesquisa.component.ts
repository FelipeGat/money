import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { from } from 'rxjs';

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

  constructor(
    private router: Router,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit() {
    this.pesquisar(); // Carregar dados ao iniciar
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    from(this.lancamentoService.pesquisar(this.filtro)).subscribe(
      resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao pesquisar lançamentos' });
        console.error('Erro ao pesquisar lançamentos', error);
      }
    );
  }

  mudarPagina() {
    this.router.navigate(["/lancamentos-cadastro"]);
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      defaultFocus: 'accept',

      accept: () => {
      this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir lançamento' });
        console.error('Erro ao excluir lançamento', error);
      });
  }
}
