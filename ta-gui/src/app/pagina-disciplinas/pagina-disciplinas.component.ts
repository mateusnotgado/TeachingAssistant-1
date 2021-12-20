import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../models/Disciplina';
import { DisciplinasService } from '../services/disciplinas.service';

@Component({
  selector: 'app-pagina-disciplinas',
  templateUrl: './pagina-disciplinas.component.html',
  styleUrls: ['./pagina-disciplinas.component.css']
})
export class PaginaDisciplinasComponent implements OnInit {
  
  name : string=""
  teacher : string=""
  hours : string=""
  capacity : number=0
  constructor(private disciplinasService: DisciplinasService) { }
  disciplina: Disciplina = new Disciplina();
  criarDisciplina(){
   //this.disciplina.nome=this.name
   /// this.disciplina.professor=this.teacher
   // this.disciplina.hours=this.hours
    //this.disciplina.capacity=this.capacity
    this.disciplinasService.criar(this.disciplina).subscribe({
     next: (message) => {
        this.name= "";
        this.teacher= "";
        this.hours= "";
        this.capacity =0;

      },
      error: ()=> {
        alert("Não foi possível criar a disciplina")
      }
    })
    this.disciplina= new Disciplina();
  }


  ngOnInit(): void {
    this.name= "";
    this.teacher= "";
    this.hours= "";
    this.capacity =0;
  }

}
