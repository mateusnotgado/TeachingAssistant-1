import { Disciplina } from "./Disciplina";

export class Aluno {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    listaDeMatriculas:Disciplina[];
  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.senha="";
    this.listaDeMatriculas=[];
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.senha=this.senha;
    return aluno;
  }

 

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.senha=from.senha;
  }
  getSenha ():string{
    return this.senha;

}

getCPF ():string {
  return this.cpf;
}
 criar (nome: string,
  cpf: string,
  email: string,
  senha: string):void{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha=senha;
 } 
}