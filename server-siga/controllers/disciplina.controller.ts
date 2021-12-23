
import { Disciplina } from '../models/Disciplina';
import disciplinaRouter from '../routes/disciplina.routes';

export class disciplinaController {
    disciplinas:Disciplina[]=[];

    constructor () {
        this.disciplinas=[];
    }

    getDisciplinas():Disciplina[]{
        return this.disciplinas;
    }
    cadastrar(disciplina: Disciplina): void {
       this.disciplinas.push(disciplina);
      }

      camposPreenchidos(disciplina:Disciplina):boolean{
       if(disciplina.nomeDisciplina==""||disciplina.horarioDocomeco==""||
       disciplina.horarioDoFim==""||disciplina.dia==""||disciplina.capacidade==0){
        return false;
       } 
       return true;
      }
     converterTempoParaMinutos(horario:string):number{
       let horarios=horario.split(":");
       let horas =parseInt(horarios[0]);
       let minutos =parseInt(horarios[1]);
      let  tempoEmMinutos = minutos+horas*60;
       return tempoEmMinutos;
     }
    
    checarClonflitos(disciplina:Disciplina):boolean{
        let resultado = this.disciplinas.find(d =>this.condicaoDeConflito(disciplina.cpfDoProfessor,
           disciplina.dia,disciplina.horarioDocomeco,disciplina.horarioDoFim,
          d.cpfDoProfessor,d.dia,d.horarioDocomeco,d.horarioDoFim));
        if(resultado==null){
          return false;
        } else {
          return true;
        }
   
      }
      condicaoDeConflito(cpf:string,dia:string,comeco:string,fim:string,
        cpf2:string,dia2:string,comeco2:string,fim2:string):boolean {
         let comecoEmMin=this.converterTempoParaMinutos(comeco);
         let fimEmMin=this.converterTempoParaMinutos(fim);
         let comeco2EmMin=this.converterTempoParaMinutos(comeco2);
         let fim2EmMin=this.converterTempoParaMinutos(fim2);
         let conflitoHorario=this.conflitoDeHorario(comecoEmMin,fimEmMin,comeco2EmMin,fim2EmMin);
         return this.mesmoDia(dia,dia2)&&this.mesmoProfessor(cpf,cpf2)&&conflitoHorario;
      }
      mesmoDia(dia1:string,dia2:string):boolean {
      return dia1==dia2;
      }
      mesmoProfessor(cpf1:string,cpf2:string):boolean{
      return cpf1==cpf2;
      }
      conflitoDeHorario(comeco1:number,fim1:number,comeco2:number,fim2:number):boolean {
        if(comeco1>=comeco2&&fim1<=fim2){
          return true;
        } 

        if(comeco1<=comeco2&&fim1>comeco2){
          return true;
        }
       if(comeco1<fim2&&fim1>=fim2){
         return true;
       } 

       return false;
      }
      temVaga(index:number):boolean{
        if(this.disciplinas[index].capacidade>this.disciplinas[index].totalDeAlunos){
          return true;
        } else {
          return false;
        }
      }
      pegarVaga(index:number){
        this.disciplinas[index].totalDeAlunos=this.disciplinas[index].totalDeAlunos+1;
      }
}