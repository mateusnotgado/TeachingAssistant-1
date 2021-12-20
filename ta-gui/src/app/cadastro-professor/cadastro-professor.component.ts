import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../../common/Professor';
import { AlunoService } from '../services/aluno.service';
import { professorService } from '../services/professor.service';


@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  professores:Professor[]=[];
 professor:Professor=new Professor();
 
 
   constructor(private profService: professorService) { }
 
   cadastrarProfessor() {
    this.profService.enviarProfessor(this.professor)
      .subscribe({
        next:  (message)=>{
          alert(message.message);
         
          this.professor.nome="";
          this.professor.cpf="";
          this.professor.email="";
          this.professor.senha="";
        },
        error:(err) => {
           alert(err.error.err); 
          }
        })
  }

  listarProfessores (){
    this.profService.getProfessores().subscribe({
      next : (users) => {
            this.professores=users;
            console.log(this.professores)
      },
     error : () => {
       alert("erro ao requisitar lista de alunos")
 }
    })
  }
  onMove(): void {
  
  }

  ngOnInit(): void {
    
  }
}
