"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroDeProfessores = void 0;
const Professor_1 = require("../common/Professor");
class CadastroDeProfessores {
    constructor() {
        this.professores = [];
    }
    cadastrar(professor) {
        var result = null;
        if (this.cpfNaoCadastrado(professor.cpf)) {
            result = new Professor_1.Professor();
            result.copyFrom(professor);
            this.professores.push(result);
        }
        return result;
    }
    cpfNaoCadastrado(cpf) {
        return !this.professores.find(a => a.cpf == cpf);
    }
    atualizar(professor) {
        var result = this.professores.find(a => a.cpf == professor.cpf);
        if (result)
            result.copyFrom(professor);
        return result;
    }
    getAlunos() {
        return this.professores;
    }
}
exports.CadastroDeProfessores = CadastroDeProfessores;
//# sourceMappingURL=cadastro-de-professores.js.map