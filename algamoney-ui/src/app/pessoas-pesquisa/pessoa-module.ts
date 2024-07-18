import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/Inputmask/inputmask';
import { SharedModule } from 'primeng/api';
import { PessoaCadastroComponent } from '../pessoa-cadastro/pessoa-cadastro.component';


@NgModule({
  declarations: [
    PessoaCadastroComponent
    ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule
  ],
  exports: [
    PessoaCadastroComponent,
  ]
})
export class PessoasModule { }
