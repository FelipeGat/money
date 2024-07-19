import { PessoaService } from '../../pessoas/pessoa.service';
import { CategoriaService } from '../../categorias/categoria-service';
import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  lancamentoForm: FormGroup;

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [];
  pessoas = [];

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lancamentoForm = this.fb.group({
      tipo: ['', Validators.required],
      dataVencimento: ['', Validators.required],
      dataPagamento: [''],
      descricao: ['', Validators.required],
      categoria: ['', Validators.required],
      valor: ['', Validators.required],
      pessoa: ['', Validators.required],
      observacao: ['']
    });

    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias;
      })
      .catch(error => {
        console.error('Erro ao carregar Categorias', error);
      });
  }

  carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas;
      })
      .catch(error => {
        console.error('Erro ao carregar Pessoas', error);
      });
  }

  cadastrar() {
    if (this.lancamentoForm.valid) {
      const lancamento = this.lancamentoForm.value;

      this.lancamentoService.cadastrar(lancamento)
        .then(() => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento cadastrado com sucesso', closable: false, life: 6000 });
          this.router.navigate(['/lancamentos']);
        })
        .catch(error => {
          console.error('Erro ao cadastrar lançamento', error);
          this.messageService.add({ severity: 'error', summary: 'Atenção', detail: 'Erro ao cadastrar lançamento', closable: false, life: 6000 });
        });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Preencha todos os campos obrigatórios', closable: false, life: 6000 });
    }
  }
}
