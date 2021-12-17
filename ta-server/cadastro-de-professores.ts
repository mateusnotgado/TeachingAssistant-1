import { Professor } from '../common/Professor';

export class CadastroDeProfessores {
   professores: Professor[] = [];

   cadastrar(professor: Professor): Professor {
     var result = null;
     if (this.cpfNaoCadastrado(professor.cpf)) {
       result = new Professor();
       result.copyFrom(professor);
       this.professores.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.professores.find(a => a.cpf == cpf);
   }

    atualizar(professor:Professor): Professor {
     var result: Professor = this.professores.find(a => a.cpf == professor.cpf);
     if (result) result.copyFrom(professor);
     return result;
   }

    getAlunos(): Professor[] {
     return this.professores;
   }
}