import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };
  chartLegend = true;
  chartType = 'bar';

  receitasPorPessoa = {
    labels: ['Felipe Gat', 'Ju Siqueira'],
    datasets: [
      {
        label: 'Receitas',
        data: [300, 500, 100],
        backgroundColor: ['rgb(7, 182, 153)', 'pink',]
      }
    ]
  };

  receitasPorMes = {
    labels: ['Janeiro', 'Fevereiro', 'Março'],
    datasets: [
      {
        label: 'Receitas',
        data: [1000, 1500, 2000],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };

  despesasPorPessoa = {
    labels: ['Felipe Gat', 'Ju Siqueira'],
    datasets: [
      {
        label: 'Despesas',
        data: [200, 400, 600],
        backgroundColor: ['rgb(7, 182, 153)', 'pink',]
      }
    ]
  };

  despesasPorMes = {
    labels: ['Janeiro', 'Fevereiro', 'Março'],
    datasets: [
      {
        label: 'Despesas',
        data: [500, 700, 800],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  despesasPorTipo = {
    labels: ['Cartão', 'Boletos', 'Obra', 'Outros'],
    datasets: [
      {
        label: 'Despesas',
        data: [400, 300, 100],
        backgroundColor: ['#FF6384', 'pink' ,'#36A2EB', '#FFCE56']
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
