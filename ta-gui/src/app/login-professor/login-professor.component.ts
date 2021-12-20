import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { professorService } from '../services/professor.service';

@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css']
})
@Injectable()
export class LoginProfessorComponent implements OnInit {
cpf:string="";
senha:string="";
  constructor(private professor:professorService,private router:Router) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    console.log(this.cpf+" "+this.senha)
    this.professor.logarProfessor(this.cpf,this.senha).subscribe({
      next:  (message)=>{
        alert(message.message);
        this.router.navigate(['./app-pagina-oferta-disciplinas'])
        this.cpf="";
        this.senha="";
      },
      error:(err) => {
         alert(err.error.err); 
        }
      });
  
  }
}
