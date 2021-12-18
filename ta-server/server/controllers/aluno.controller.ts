import { Aluno } from "../models/aluno";


export class aluno {
    alunos: Aluno[] = [];
 
    cadastrar(aluno: Aluno): Aluno {
      var result = null;
      if (this.cpfNaoCadastrado(aluno.cpf)) {
        result = new Aluno();
        result.copyFrom(aluno);
        this.alunos.push(result);
      }
      return result;
    }
 
     cpfNaoCadastrado(cpf: string): boolean {
       return !this.alunos.find(a => a.cpf == cpf);
    }
     conferirSenha(senha:string):boolean{
        if(senha.length<8)
           return false;
        else
          return true;
     }
     atualizar(aluno: Aluno): Aluno {
      var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
      if (result) result.copyFrom(aluno);
      return result;
    }
 
     getAlunos(): Aluno[] {
      return this.alunos;
    }
 }