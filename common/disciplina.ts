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
    

}