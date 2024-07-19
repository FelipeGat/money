import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  constructor(private pessoaService: PessoaService, private messageService:MessageService, private router: Router) { }

  ngOnInit(): void {
  }
  cadastroPessoa(body) {

    const pessoa = {
      nome: body.form.value.nome,
      endereco: {
        logradouro: body.form.value.logradouro,
        numero: body.form.value.numero,
        complemento: body.form.value.complemento,
        bairro: body.form.value.bairro,
        cep: body.form.value.cep.replace(/\D/g, ""),
        cidade: body.form.value.cidade,
        estado: body.form.value.uf
      }
    }

    this.pessoaService.cadastrar(pessoa)
      .then(acerto=>{
      this.messageService.add({severity:'success', summary:'Sucesso', detail: 'Foi o bagui', closable: false, life: 6000})
      this.router.navigate(["/pessoas"])
    }).catch(erro =>{
      console.log(erro)
      this.messageService.add({severity:'error', summary:'Atenção', detail: 'Não foi o bagui', closable: false, life: 6000})
    })
  }
}
