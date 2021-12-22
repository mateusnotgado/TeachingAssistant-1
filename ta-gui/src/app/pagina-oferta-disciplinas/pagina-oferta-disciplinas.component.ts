import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';
import { LoginProfessorComponent } from '../login-professor/login-professor.component';
import { professorService } from '../services/professor.service';
import { disciplinaController } from '../../../../server-siga/controllers/disciplina.controller';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-pagina-oferta-disciplinas',
  templateUrl: './pagina-oferta-disciplinas.component.html',
  styleUrls: ['./pagina-oferta-disciplinas.component.css']
})
export class PaginaOfertaDisciplinasComponent implements OnInit {
  
  disciplinas: Disciplina[]=[];
  disciplinasMatriculadas:Disciplina[];
  aluno:Aluno;
 
  
  constructor(private disciplinasService: DisciplinasService,private alunoService: AlunoService) { }

  //obterDisciplinas(): Disciplina[]{
    //this.disciplinas=this.disciplinasService.getDisciplinas();
  //  return this.disciplinas;
 // }
 getAluno(){
  this.alunoService.getAluno().subscribe({
     next: (message) => {
        this.aluno=message;
      },
      error:()=>{
       alert("falha ao pegar os dados do aluno")
      }
  }
    
     
    
     
      
  );
 }
 getListaDisciplinas(){
  this.disciplinasService.getDisciplinas()
  .subscribe(
    disci => {this.disciplinas=disci;}
  );
}
  selecionarDisciplina(index: number): void{
    this.disciplinas.splice(index,1);
  }
  ngOnInit(): void {
   this.getAluno();
   this.getListaDisciplinas();
  }

}
