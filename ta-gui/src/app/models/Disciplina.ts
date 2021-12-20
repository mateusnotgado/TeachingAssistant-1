export class Disciplina {
    nome_disciplina : string;
    professor : string;
    dia:string;
    comeco:number;
    fim : number;
    capacidade : number;
    totalDeAlunos:number;

    constructor(){
        this.clean();
    }

    criar (nome_disciplina : string,
        professor : string,
        dia:string,
        comeco:number,
        fim : number,
        capacidade : number,
        totalDeAlunos:number
    ) :void{
        this.nome_disciplina=nome_disciplina;
        this.professor =professor;
        this.comeco=comeco;
        this.fim =fim;
        this.capacidade =capacidade;
        this.totalDeAlunos= totalDeAlunos;
       } 

    clean(): void {
        this.nome_disciplina="";
        this.professor ="";
        this.comeco=0;
        this.fim =0;
        this.capacidade =0;
        this.totalDeAlunos= 0;
      }
    

}