
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../../common/aluno';
import { AlunoService } from '../services/aluno.service';


@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

 alunos:Aluno[]=[];
 aluno:Aluno=new Aluno();


  constructor(private alunoService: AlunoService) { }

 criarAluno(a: Aluno): void {
    this.alunoService.criar(a)
      .subscribe(
        ar => {
          if (ar) {
            this.alunos.push(ar);
            this.aluno = new Aluno();
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
    this.alunoService.getAlunos()
      .subscribe(
        as => { this.alunos = as; },
        msg => { alert(msg.message); }
      );
  }
}
