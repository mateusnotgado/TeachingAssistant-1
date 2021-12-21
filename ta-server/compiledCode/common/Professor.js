"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
class Professor {
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
        var professor = new Professor();
        professor.nome = this.nome;
        professor.cpf = this.cpf;
        professor.email = this.email;
        professor.senha = this.senha;
        return professor;
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
}
exports.Professor = Professor;
//# sourceMappingURL=Professor.js.map