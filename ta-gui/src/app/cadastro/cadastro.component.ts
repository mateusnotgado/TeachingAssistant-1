
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../../common/aluno';
import { AlunoService } from '../aluno.service';
//import { Aluno } from '../../../common/aluno';
//import { AlunoService } from './aluno.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

 alunos:Aluno[]=[];
 aluno:Aluno=new Aluno();
  cpfduplicado: boolean = false;

  constructor(private alunoService: AlunoService) { }

 criarAluno(a: Aluno): void {
    this.alunoService.criar(a)
      .subscribe(
        ar => {
          if (ar) {
            this.alunos.push(ar);
            this.aluno = new Aluno();
          } else {
            this.cpfduplicado = true;
          }
        },
        msg => { alert(msg.message); }
      );
  }


  onMove(): void {
    this.cpfduplicado = false;
  }

  ngOnInit(): void {
    this.alunoService.getAlunos()
      .subscribe(
        as => { this.alunos = as; },
        msg => { alert(msg.message); }
      );
  }
}
