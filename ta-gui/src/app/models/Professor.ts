export class Professor {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.email = "";
      this.senha = "";
    }
  
    clone(): Professor {
      var professor: Professor = new Professor();
      professor.nome = this.nome;
      professor.cpf = this.cpf;
      professor.email = this.email;
      professor.senha = this.senha;
      return professor;
    }
  
  
  
    copyFrom(from: Professor): void {
      this.nome = from.nome;
      this.cpf = from.cpf;
      this.email = from.email;
      this.senha = from.senha;
    }
    getSenha(): string {
      return this.senha;
  
    }
  
    getCPF(): string {
      return this.cpf;
    }
  
  }