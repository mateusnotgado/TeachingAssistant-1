import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css']
})
@Injectable()
export class LoginAlunoComponent implements OnInit {
  cpf:string="";
senha:string="";
  constructor(private alunoSer:AlunoService,private router:Router) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    console.log(this.cpf+" "+this.senha)
    this.alunoSer.logarAluno(this.cpf,this.senha).subscribe({
      next:  (message)=>{
        alert(message.message);
        this.router.navigate(['./app-pagina-disciplinas'])
        this.cpf="";
        this.senha="";
      },
      error:(err) => {
         alert(err.error.err); 
        }
      });
  
  }

}
