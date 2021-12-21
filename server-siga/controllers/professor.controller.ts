import { Aluno } from "../models/Aluno";
import { Professor } from "../models/Professor";

export class professorController {
    professores: Professor[] = [];
    professor:Professor;
    constructor() {
        this.professores = [];
    }

    getProfessores(): Professor[] {
        return this.professores;
    }

    setProfessor(cpf: String){
        this.professores=this.getProfessores();
        this.professor= this.professores.find(p => p.cpf== cpf);
    }
    getProfessor(): String{
        return this.professor.nome;
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
   getPermissaoLogin(cpf:string,senha:string):boolean { // concede a permissão de login e salva no server quem esta
     
    
     if(this.professorNaoEncontrado(cpf,senha)){
         return false;
     } else {
         this.professor=this.professores.find(a => a.cpf == cpf);
         return true;
     }
       
   }
getDadosLogin():Professor{
 return this.professor;
       }

       professorNaoEncontrado (cpf:string,senha:string):boolean{
           return !this.professores.find(a => a.cpf == cpf&&a.senha==senha);
       }
}