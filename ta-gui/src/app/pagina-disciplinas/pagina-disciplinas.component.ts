import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-disciplinas',
  templateUrl: './pagina-disciplinas.component.html',
  styleUrls: ['./pagina-disciplinas.component.css']
})
export class PaginaDisciplinasComponent implements OnInit {

  titulo: string  = "Cadastro de Disciplinas"
  constructor() { }

  ngOnInit(): void {
  }

}
