import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-pagina-oferta-disciplinas',
  templateUrl: './pagina-oferta-disciplinas.component.html',
  styleUrls: ['./pagina-oferta-disciplinas.component.css']
})
export class PaginaOfertaDisciplinasComponent implements OnInit {
  
  disciplinas: Disciplina[]=[];
  aluno:Aluno;
  constructor(private disciplinasService: DisciplinasService,private alunoService: AlunoService) { }
 getAluno(){
  this.alunoService.getAluno().subscribe({
     next: (message) => {
        this.aluno=message;
      },
      error:()=>{
       alert("falha ao pegar os dados do aluno")
      }
  });
 }
 getListaDisciplinas(){
  this.disciplinasService.getDisciplinas()
  .subscribe(
    disci => {this.disciplinas=disci;}
  );
}
temVaga(index:number){
  this.alunoService.temVaga(index).subscribe({
    next: () => {
    this.matricular(index);
    },
    error:(err)=>{
     alert(err.error.err);
    }
  })
}
pegarVaga(index:number){
this.alunoService.preencherVaga(index).subscribe({
  next : ()=>{
        console.log("vaga preenchida");
  },
  error:()=>{

  }
})
}
matricular(index:number):boolean{
  this.alunoService.matricularAluno(this.disciplinas[index],this.aluno).subscribe({
    next: (message) => {
       this.aluno.listaDeMatriculas.push(this.disciplinas[index]);
       this.pegarVaga(index);
       alert(message.message);
       return true;
     },
     error:(err)=>{
      alert(err.error.err);
     }
 });
  return false;
}
  ngOnInit(): void {
   this.getAluno();
   this.getListaDisciplinas();
  }

}
