import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
//import { Router } from '@angular/router';
//import { AlunoService } from './app/aluno.service';
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }
alunos:Aluno[]=[];
aluno:Aluno = new Aluno();
  ngOnInit(): void {
    
    this.aluno.criar("mateus","97490","mcbt","123")
    this.alunos.push(this.aluno)
  }
  redirecionar ():void {
   //this.router.navigate['app-login-aluno']
  }
}
