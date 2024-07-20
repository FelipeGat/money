import { PessoaService } from '../pessoas/pessoa.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pessoas = [];

  chartOptions = {
    responsive: true,
  };
  chartLegend = true;
  chartType = 'bar';

  receitasPorPessoa = {
    labels: [],
    datasets: [
      {
        label: 'Receitas',
        data: [],
        backgroundColor: []
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
    labels: [],
    datasets: [
      {
        label: 'Despesas',
        data: [],
        backgroundColor: []
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
        backgroundColor: ['#FF6384', 'pink', '#36A2EB', '#FFCE56']
      }
    ]
  };

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.listarTodas().then(pessoas => {
      this.pessoas = pessoas;

      // Atualiza os gráficos com as pessoas recuperadas
      const nomes = pessoas.map(p => p.nome);
      const receitas = pessoas.map(() => Math.floor(Math.random() * 1000)); // Gerar receitas aleatórias
      const despesas = pessoas.map(() => Math.floor(Math.random() * 500)); // Gerar despesas aleatórias
      const backgroundColors = pessoas.map(() => this.gerarCorAleatoria());

      this.receitasPorPessoa.labels = nomes;
      this.receitasPorPessoa.datasets[0].data = receitas;
      this.receitasPorPessoa.datasets[0].backgroundColor = backgroundColors;

      this.despesasPorPessoa.labels = nomes;
      this.despesasPorPessoa.datasets[0].data = despesas;
      this.despesasPorPessoa.datasets[0].backgroundColor = backgroundColors;
    });
  }

  gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
