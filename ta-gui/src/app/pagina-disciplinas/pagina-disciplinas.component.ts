import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';
import { professorService } from '../services/professor.service';

@Component({
  selector: 'app-pagina-disciplinas',
  templateUrl: './pagina-disciplinas.component.html',
  styleUrls: ['./pagina-disciplinas.component.css']
})
export class PaginaDisciplinasComponent implements OnInit {
  nomeProfessorTela: String = "";
  constructor(private disciplinasService: DisciplinasService,private professor:professorService) { }
  disciplina: Disciplina = new Disciplina();
  criarDisciplina(){
    this.disciplinasService.criar(this.disciplina).subscribe({
     next: (message) => {
        alert("Disciplina cadastrada com sucesso");
        this.disciplina.nomeProfessor= "";
        this.disciplina.nomeDisciplina= "";
        this.disciplina.horarios= "";
        this.disciplina.capacidade =0;
        this.disciplina.totalDeAlunos=0;

      },
      error: ()=> {
        alert("Não foi possível criar a disciplina")
      }
    })
    this.disciplina= new Disciplina();
  }
  getProfessor(){
    this.professor.getProfessorNome().subscribe(
      
        as => {this.nomeProfessorTela=as;}
      
       
        
    );
   }


  ngOnInit(): void {
    this.disciplina.nomeProfessor= "";
    this.disciplina.nomeDisciplina= "";
    this.disciplina.horarios= "";
    this.disciplina.capacidade =0;
    this.disciplina.totalDeAlunos=0;
    this.getProfessor();
  }

}
