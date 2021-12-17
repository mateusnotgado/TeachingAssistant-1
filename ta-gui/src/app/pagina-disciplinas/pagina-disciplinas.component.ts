import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../../common/disciplina';
import { DisciplinasService } from '../services/disciplinas.service';

@Component({
  selector: 'app-pagina-disciplinas',
  templateUrl: './pagina-disciplinas.component.html',
  styleUrls: ['./pagina-disciplinas.component.css']
})
export class PaginaDisciplinasComponent implements OnInit {
  

  constructor(private disciplinasService: DisciplinasService) { }
  disciplina: Disciplina = new Disciplina();
  criarDisciplina(d: Disciplina) : void {
    this.disciplinasService.criar(d)
    this.disciplina= new Disciplina();
  }

  ngOnInit(): void {
  }

}
