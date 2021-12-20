
import { Disciplina } from '../models/Disciplina';

export class disciplinaController {
    disciplinas:Disciplina[]=[];

    constructor () {
        this.disciplinas=[];
    }

    getDisciplinas():Disciplina[]{
        return this.disciplinas;
    }
    cadastrar(disciplina: Disciplina): string {
        var result = "cadastro feito com sucesso";
        this.disciplinas.push(disciplina);
        return result;
      }
     
    
    encontrarDisciplina(name:string,teacher:string):boolean{
        let resultado = this.disciplinas.find(d => d.name == name&& d.teacher==teacher)
        if(resultado==null){
          return false;
        } else {
          return true;
        }
         
      }
      
}