export class Disciplina {
    name : string;
    teacher : string;
    hours : string;
    capacity : number;

    constructor(){
        this.clean();
    }

    criar (name : string, teacher : string, hours : string, capacity : number) :void{
        this.name=name
        this.teacher=teacher
        this.hours=hours
        this.capacity=capacity
       } 

    clean(): void {
        this.name = "";
        this.teacher = "";
        this.hours = "";
        this.capacity=0;
      }
    
    clone(): Disciplina{
        var disciplina: Disciplina = new Disciplina();
        disciplina.name = this.name;
        disciplina.teacher = this.teacher;
        disciplina.hours = this.hours;
        disciplina.capacity=this.capacity;
        return disciplina;
    }

    copyFrom(from: Disciplina): void {
        this.name = from.name;
        this.teacher = from.teacher;
        this.hours = from.hours;
        this.capacity=from.capacity;
    }

    getNome ():string {
        return this.name;
      }

    getProfessor ():string{
        return this.teacher;
    
    }
    

}