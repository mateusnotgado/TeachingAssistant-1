import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../../common/Professor';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';
import { professorService } from '../services/professor.service';

@Component({
  selector: 'app-pagina-disciplinas',
  templateUrl: './pagina-disciplinas.component.html',
  styleUrls: ['./pagina-disciplinas.component.css']
})
export class PaginaDisciplinasComponent implements OnInit {
  prof:Professor;
   disciplina: Disciplina = new Disciplina();
  dias = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
  disciplinas:Disciplina[]=[];
  constructor(private disciplinasService: DisciplinasService,private professor:professorService) { }
 
  criarDisciplina(){
    this.disciplina.nomeProfessor=this.prof.nome;
    this.disciplina.cpfDoProfessor=this.prof.cpf;
    this.disciplinasService.criar(this.disciplina).subscribe({
     next: (message) => {
        alert("Disciplina cadastrada com sucesso");
        this.disciplinas.push(this.disciplina);
        this.disciplina= new Disciplina();
      },
      error: (err)=> {
        alert(err.error.error)
      }
    })
    
  }
  getProfessor(){
    this.professor.getDadosdeLogin().subscribe({
      next:  (message)=>{
        this.prof=message;
      },
      error:(err) => {
         alert("erro ao pegar os dados do professor"); 
        }
    });
   }
  getDisciplinas(){
    this.disciplinasService.getDisciplinas().subscribe({
      next: (message)=>{
    this.disciplinas=message;
      },
      error:()=> {
        alert("erro ao pegar as disciplinas")
      }
    })
  }
   
  ngOnInit(): void {
    this.disciplina.nomeProfessor= "";
    this.disciplina.nomeDisciplina= "";
    this.disciplina.capacidade =0;
    this.disciplina.totalDeAlunos=0;
    this.getProfessor();
    this.getDisciplinas();
  }

}
