import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';
import { LoginProfessorComponent } from '../login-professor/login-professor.component';
import { professorService } from '../services/professor.service';
import { disciplinaController } from '../../../../server-siga/controllers/disciplina.controller';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-pagina-oferta-disciplinas',
  templateUrl: './pagina-oferta-disciplinas.component.html',
  styleUrls: ['./pagina-oferta-disciplinas.component.css']
})
export class PaginaOfertaDisciplinasComponent implements OnInit {
  
  disciplinas: Disciplina[]=[];
  nomeAluno: String = "";
  titulo: string  = "Oferta de Disciplinas";
  num:number[]=[1,2,3,4,5,6];
  
  constructor(private disciplinasService: DisciplinasService, private professor:professorService,private alunoService: AlunoService) { }

  //obterDisciplinas(): Disciplina[]{
    //this.disciplinas=this.disciplinasService.getDisciplinas();
  //  return this.disciplinas;
 // }
 getAluno(){
  this.alunoService.getAlunoNome().subscribe(
    
      as => {this.nomeAluno=as;}
    
     
      
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
   
  }

}
