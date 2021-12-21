"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor() {
        this.clean();
    }
    clean() {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.senha = "";
    }
    clone() {
        var aluno = new Aluno();
        aluno.nome = this.nome;
        aluno.cpf = this.cpf;
        aluno.email = this.email;
        aluno.senha = this.senha;
        return aluno;
    }
    copyFrom(from) {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.senha = from.senha;
    }
    getSenha() {
        return this.senha;
    }
    getCPF() {
        return this.cpf;
    }
    criar(nome, cpf, email, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}
exports.Aluno = Aluno;
//# sourceMappingURL=aluno.js.map