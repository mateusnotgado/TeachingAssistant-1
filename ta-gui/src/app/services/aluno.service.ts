import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';
import { Aluno } from '../models/Aluno';
import { Disciplina } from '../models/Disciplina';



@Injectable()
export class AlunoService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:8086';

  constructor(private http: HttpClient) { }

  enviarAluno(aluno: Aluno): Observable<any> {
    return this.http.post<any>(this.taURL + "/aluno/cadastro", aluno)
      
  }

  getAluno(): Observable<Aluno> {
    return this.http.get<Aluno>(this.taURL + "/aluno/login")
      .pipe(
        retry(2)
      );
  }
  logarAluno(cpf: string,senha: string): Observable<any> {
    return this.http.post<any>(this.taURL + "/aluno/login",
    {
      cpf: cpf,
      senha: senha
    });
  }
  matricularAluno(disciplina:Disciplina,aluno:Aluno):Observable<any>{
    return this.http.put<any>(this.taURL + "/aluno/login",
    {
      disciplina:disciplina,
     aluno:aluno
    });
  }
}