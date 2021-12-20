
import { Component, Injectable, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../services/aluno.service';


@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class CadastroComponent implements OnInit {

 alunos:Aluno[]=[];
 aluno:Aluno=new Aluno();


  constructor(private alunoService: AlunoService) { }

 cadastrarAluno() {
    this.alunoService.enviarAluno(this.aluno)
      .subscribe({
        next:  (message)=>{
          alert(message.message);
         
          this.aluno.nome="";
          this.aluno.cpf="";
          this.aluno.email="";
          this.aluno.senha="";
        },
        error:(err) => {
           alert(err.error.err); 
          }
        })
  }

  listarAlunos (){
    this.alunoService.getAlunos().subscribe({
      next : (users) => {
            this.alunos=users;
            console.log(this.alunos)
      },
     error : () => {
       alert("Requisição de lista de alunos invalida")
 }
    })
  }
  onMove(): void {
  
  }

  ngOnInit(): void {
    
  }
}
