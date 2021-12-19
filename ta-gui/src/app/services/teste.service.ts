import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Aluno } from "../../../../common/aluno";

@Injectable()
export class Teste {
    private aluno:Aluno=new Aluno();
    constructor(private router:Router){}
logar(){
    this.router.navigate(['./app-pagina-ofertar-disciplinas'])
    console.log("testandoooo")
}
}