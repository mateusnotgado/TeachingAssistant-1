import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';
import { LoginProfessorComponent } from '../login-professor/login-professor.component';
import { professorService } from '../services/professor.service';

@Component({
  selector: 'app-pagina-oferta-disciplinas',
  templateUrl: './pagina-oferta-disciplinas.component.html',
  styleUrls: ['./pagina-oferta-disciplinas.component.css']
})
export class PaginaOfertaDisciplinasComponent implements OnInit {
  
  disciplinas: Disciplina[]=[];
  nomeProfessor: String = "";
  titulo: string  = "Oferta de Disciplinas";
  constructor(private disciplinasService: DisciplinasService, private professor:professorService) { }

  //obterDisciplinas(): Disciplina[]{
    //this.disciplinas=this.disciplinasService.getDisciplinas();
  //  return this.disciplinas;
 // }
 getProfessor(){
  this.professor.getProfessorNome().subscribe(
    
      as => {this.nomeProfessor=as;}
    
     
      
  );
 }
 getDisciplinas(){
  return this.disciplinasService.getDisciplinas().subscribe({
    next: (disciplinas) =>{
      this.disciplinas=disciplinas;
    },
    error:()=>{
      alert("Não foi possível obter as disciplinas do servidor")
    }
  })
}
  selecionarDisciplina(index: number): void{
    this.disciplinas.splice(index,1);
  }
  ngOnInit(): void {
   this.getProfessor();
  }

}
