import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../../common/disciplina';
import { DisciplinasService } from '../services/disciplinas.service';

@Component({
  selector: 'app-pagina-oferta-disciplinas',
  templateUrl: './pagina-oferta-disciplinas.component.html',
  styleUrls: ['./pagina-oferta-disciplinas.component.css']
})
export class PaginaOfertaDisciplinasComponent implements OnInit {

  disciplinas: Disciplina[]=[];
  titulo: string  = "Oferta de Disciplinas";
  constructor(private disciplinasService: DisciplinasService) { }

  //obterDisciplinas(): Disciplina[]{
    //this.disciplinas=this.disciplinasService.getDisciplinas();
  //  return this.disciplinas;
 // }
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
   this.getDisciplinas();
  }

}
