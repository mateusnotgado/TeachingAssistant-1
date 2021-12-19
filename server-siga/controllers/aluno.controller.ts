import { Aluno } from "../models/Aluno";

export class alunoController {
    alunos:Aluno[]=[];

    constructor () {
        this.alunos=[];
    }

    getAlunos():Aluno[]{
   return this.alunos;
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

      encontrarAluno(cpf:string,senha:string):boolean{
        let resultado = this.alunos.find(a => a.cpf == cpf&&a.senha==senha)
        if(resultado==null){
          return false;
        } else {
          return true;
        }
         
      }
      
}