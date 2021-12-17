import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../../common/Professor';
import { AlunoService } from '../services/aluno.service';
import { cadastroProfessor } from '../services/cadastroProfessor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  professores:Professor[]=[];
 professor:Professor=new Professor();
 
 
   constructor(private cadProfessor: cadastroProfessor) { }
 
  criarProfessor(p: Professor): void {
     this.cadProfessor.criar(p)
       .subscribe(
         ar => {
           if (ar) {
             this.professores.push(ar);
             this.professor= new Professor();
             alert("aluno cadastrado com sucesso")
           } else {
             alert("aluno cadastrado sem sucesso")
           }
         },
         msg => { alert(msg.message); }
       );
   }
 
 
   onMove(): void {
   
   }
 
   ngOnInit(): void {
     this.cadProfessor.getAlunos()
       .subscribe(
         as => { this.professores = as; },
         msg => { alert(msg.message); }
       );
   }
}
