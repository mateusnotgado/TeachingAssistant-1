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
        this.alunos=this.getAlunos();
        this.aluno= this.alunos.find(a => a.cpf== cpf);
    }
    getAluno(): String{
        return this.aluno.nome;
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
            this.aluno=this.alunos.find(a => a.cpf == cpf);
            return true;
           }  
      }
      getDadosLogin():Aluno{
       return this.aluno;
          }
          alunoNaoEncontrado (cpf:string,senha:string):boolean{
              return !this.alunos.find(a => a.cpf == cpf&&a.senha==senha);
          }
      
      
      
          matricula(disciplinas:Disciplina[]):void {
            
        for(let i=0;i<disciplinas.length;i++){
          this.aluno.listaDeMatriculas.push(disciplinas[i]);
        }
      }

      temDisciplina(disciplinas:Disciplina[]):boolean{
        if(disciplinas.length>0){
          return true;
        }else {
          return false;
        }
      }
}