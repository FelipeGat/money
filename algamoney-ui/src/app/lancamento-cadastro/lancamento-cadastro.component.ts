import { PessoaService } from '../pessoas-pesquisa/pessoa.service';
import { CategoriaService } from './../categorias/categoria-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita' , value: 'RECEITA'},
    {label: 'Despesa' , value: 'DESPESA'}
  ];

  categorias = [];
  pessoas = [];

  constructor( private categoriaService: CategoriaService, private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias(){
      return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo}))
        })
      .catch(error => { console.error('Erro ao carregar Categorias', error);
    })
}

    carregarPessoas(){
      return this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map(p => ({ label: p.nome, value: p.codigo}))
        })
      .catch(error => { console.error('Erro ao carregar Categorias', error);
    })
  }

}
