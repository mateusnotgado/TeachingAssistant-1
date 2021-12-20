import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Aluno } from "../models/Aluno";

@Injectable()
export class Teste {
    private aluno:Aluno=new Aluno();
    constructor(private router:Router){}
logarProfessor(){
    this.router.navigate(['./app-pagina-cadastro-disciplinas'])
    console.log("testandoooo")
}
logarAluno(){
    this.router.navigate(['./app-pagina-oferta-disciplinas'])
    console.log("testandoooo")
}
}