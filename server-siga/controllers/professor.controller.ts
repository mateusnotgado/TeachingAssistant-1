import { Aluno } from "../models/Aluno";
import { Professor } from "../models/Professor";

export class professorController {
    professores: Professor[] = [];

    constructor() {
        this.professores = [];
    }

    getAlunos(): Professor[] {
        return this.professores;
    }
    cadastrar(professor: Professor): string {
        var result = "cadastro feito com sucesso";
        if (this.cpfNaoCadastrado(professor.cpf)) {
            if (this.senhaNaoTemTamanhoMinimo(professor.senha)) {
                result = "A senha tem menos de 8 digitos";
            } else {
                this.professores.push(professor);
            }

        } else {
            result = "Cpf já cadastrado";
        }
        return result;
    }
    senhaNaoTemTamanhoMinimo(senha: string): boolean {
        if (senha.length < 8) {
            return true;
        }
        else {
            return false;
        }

    }
    cpfNaoCadastrado(cpf: string): boolean {
        return !this.professores.find(a => a.cpf == cpf);
    }

}