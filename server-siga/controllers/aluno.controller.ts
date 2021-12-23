import { Aluno } from "../models/Aluno";
import { Disciplina } from "../models/Disciplina";

export class alunoController {
    alunos:Aluno[]=[];
    aluno:Aluno=new Aluno();
    constructor () {
        this.alunos=[];
    }

    getAlunos():Aluno[]{
   return this.alunos;
    }
    setAluno(cpf: String){
        this.aluno= this.alunos.find(a => a.cpf== cpf);
    }
    getAluno(): Aluno{
        return this.aluno;
    }
    cadastrar(aluno: Aluno): string {
        var result = "cadastro feito com sucesso";
        if (this.cpfNaoCadastrado(aluno.cpf)) {
          if (this.senhaNaoTemTamanhoMinimo(aluno.senha)){
            result="A senha tem menos de 8 digitos";
             } else {
                this.alunos.push(aluno);
             }
            
        }  else {
          result="Cpf já cadastrado";
        }
          return result;
      }
     senhaNaoTemTamanhoMinimo(senha:string):boolean{
       if(senha.length<8){
          return true;
       }
       else{
          return false;
       }
      
     }
      cpfNaoCadastrado(cpf: string): boolean {
         return !this.alunos.find(a => a.cpf == cpf);
      }

      getPermissaoLogin(cpf:string,senha:string):boolean { 
        // concede a permissão de login e salva no server quem esta
        if(this.alunoNaoEncontrado(cpf,senha)){
            return false;
        } else {
            return true;
           }  
      }
      getDadosLogin():Aluno{
       return this.aluno;
          }
          alunoNaoEncontrado (cpf:string,senha:string):boolean{
              return !this.alunos.find(a => a.cpf == cpf&&a.senha==senha);
          }
      
      
      
          matricula(disciplina:Disciplina,aluno:Aluno):boolean {
            
        for(let i=0;i<this.alunos.length;i++){
          if(aluno.cpf==this.alunos[i].cpf){
           if(this.checarClonflitos(disciplina,i)) {
             return true;
           } else {
             this.alunos[i].listaDeMatriculas.push(disciplina);
           }
          }
         
        }
        return false;
      }
      converterTempoParaMinutos(horario:string):number{
        let horarios=horario.split(":");
        let horas =parseInt(horarios[0]);
        let minutos =parseInt(horarios[1]);
       let  tempoEmMinutos = minutos+horas*60;
        return tempoEmMinutos;
      }
     
     checarClonflitos(disciplina:Disciplina,index:number):boolean{
         let resultado = this.alunos[index].listaDeMatriculas.find(d =>this.condicaoDeConflito(
            disciplina.dia,disciplina.horarioDocomeco,disciplina.horarioDoFim,
           d.dia,d.horarioDocomeco,d.horarioDoFim));
         if(resultado==null){
           return false;
         } else {
           return true;
         }
    
       }
       condicaoDeConflito(dia:string,comeco:string,fim:string,dia2:string,
        comeco2:string,fim2:string):boolean {
          let comecoEmMin=this.converterTempoParaMinutos(comeco);
          let fimEmMin=this.converterTempoParaMinutos(fim);
          let comeco2EmMin=this.converterTempoParaMinutos(comeco2);
          let fim2EmMin=this.converterTempoParaMinutos(fim2);
          let conflitoHorario=this.conflitoDeHorario(comecoEmMin,fimEmMin,comeco2EmMin,fim2EmMin);
          return this.mesmoDia(dia,dia2)&&conflitoHorario;
       }
       mesmoDia(dia1:string,dia2:string):boolean {
       return dia1==dia2;
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
      
}