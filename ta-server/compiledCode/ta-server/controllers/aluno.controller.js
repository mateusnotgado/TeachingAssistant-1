"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aluno = void 0;
const aluno_1 = require("../../common/aluno");
class aluno {
    constructor() {
        this.alunos = [];
    }
    cadastrar(aluno) {
        var result = null;
        if (this.cpfNaoCadastrado(aluno.cpf)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    }
    cpfNaoCadastrado(cpf) {
        return !this.alunos.find(a => a.cpf == cpf);
    }
    conferirSenha(senha) {
        if (senha.length < 8)
            return false;
        else
            return true;
    }
    atualizar(aluno) {
        var result = this.alunos.find(a => a.cpf == aluno.cpf);
        if (result)
            result.copyFrom(aluno);
        return result;
    }
    getAlunos() {
        return this.alunos;
    }
}
exports.aluno = aluno;
//# sourceMappingURL=aluno.controller.js.map