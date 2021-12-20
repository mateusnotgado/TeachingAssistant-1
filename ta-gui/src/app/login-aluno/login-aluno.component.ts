import { Component, OnInit } from '@angular/core';
import { Teste } from '../services/teste.service';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css']
})
export class LoginAlunoComponent implements OnInit {

  constructor(private teste:Teste) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    this.teste.logarAluno();
   console.log("ola!!!!")
  }

}
