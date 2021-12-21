import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { professorService } from '../services/professor.service';
import { DisciplinasService } from '../services/disciplinas.service';

@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css']
})
@Injectable()
export class LoginProfessorComponent implements OnInit {
cpf:string="";
senha:string="";
nome:string="";

  constructor(private disci: DisciplinasService,private professor:professorService,private router:Router) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    console.log(this.cpf+" "+this.senha)
    this.professor.logarProfessor(this.cpf,this.senha).subscribe({
      next:  (message)=>{
        this.router.navigate(['./app-pagina-disciplinas'])
        this.cpf="";
        this.senha="";
        (        as: string)=>{this.disci.nomeProfessor=as;};
      },
      error:(err) => {
         alert(err.error.err); 
        }
      }
      
      );
  
  }
}
