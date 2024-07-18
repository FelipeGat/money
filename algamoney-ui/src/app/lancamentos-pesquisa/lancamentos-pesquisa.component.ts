import { Component, OnInit } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from './lancamento.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor(private lancamentoService: LancamentoService) {}

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
        console.error('Erro ao pesquisar lançamentos', error);
      }
    );
  }
  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);

  }
}
