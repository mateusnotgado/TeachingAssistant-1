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

matricular(index:number){
  
  this.alunoService.matricularAluno(this.disciplinas[index],this.aluno).subscribe({
    next: (message) => {
       this.aluno.listaDeMatriculas.push(this.disciplinas[index]);
       alert(message.message);
     },
     error:(err)=>{
      alert(err.error.err);
     }
 });
}
  ngOnInit(): void {
   this.getAluno();
   this.getListaDisciplinas();
  }

}
