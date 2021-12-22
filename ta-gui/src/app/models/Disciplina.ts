export class Disciplina {
    nomeDisciplina : string;
    nomeProfessor : string;
    cpfDoProfessor:string;
    horarioDocomeco:string;
    horarioDoFim:string;
    dia:string;
    capacidade : number;
    totalDeAlunos:number;

    constructor(){
        this.clean();
    }

    criar (nomeDisciplina : string,
        nomeProfessor : string,
        cpfDoProfessor:string,
        começo:string,
        fim:string,
        dia:string,
        capacidade : number,
        totalDeAlunos:number
    ) :void{
        this.nomeDisciplina=nomeDisciplina;
        this.nomeProfessor =nomeProfessor;
        this.cpfDoProfessor=cpfDoProfessor;
        this.horarioDocomeco=começo;
        this.horarioDoFim=fim;
        this.dia=dia;
        this.capacidade =capacidade;
        this.totalDeAlunos= totalDeAlunos;
       } 

    clean(): void {
        this.nomeDisciplina="";
        this.nomeProfessor ="";
        this.cpfDoProfessor="";
        this.horarioDocomeco="";
        this.horarioDoFim="";
        this.dia="";
        this.capacidade =0;
        this.totalDeAlunos= 0;
      }
    

}