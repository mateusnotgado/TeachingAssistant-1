export class Disciplina {
    nomeDisciplina : string;
    nomeProfessor : string;
    horarios:string;
    capacidade : number;
    totalDeAlunos:number;

    constructor(){
        this.clean();
    }

    criar (nomeDisciplina : string,
        nomeProfessor : string,
        horarios:string,
        capacidade : number,
        totalDeAlunos:number
    ) :void{
        this.nomeDisciplina=nomeDisciplina;
        this.nomeProfessor =nomeProfessor;
        this.horarios=horarios;
        this.capacidade =capacidade;
        this.totalDeAlunos= totalDeAlunos;
       } 

    clean(): void {
        this.nomeDisciplina="";
        this.nomeProfessor ="";
        this.horarios="";
        this.capacidade =0;
        this.totalDeAlunos= 0;
      }
    

}