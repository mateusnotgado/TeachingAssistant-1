import { Component, Injectable, OnInit } from '@angular/core';
import { Teste } from '../services/teste.service';

@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css']
})

export class LoginProfessorComponent implements OnInit {

  constructor(private teste:Teste) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    this.teste.logar();
   console.log("ola!!!!")
  }
}
