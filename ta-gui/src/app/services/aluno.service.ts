import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Aluno } from '../models/Aluno';



@Injectable()
export class AlunoService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:8086';

  constructor(private http: HttpClient) { }

  enviarAluno(aluno: Aluno): Observable<any> {
    return this.http.post<any>(this.taURL + "/aluno/cadastro", aluno)
      
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<any>(this.taURL + "/aluno", JSON.stringify(aluno), { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { if (res.success) { return aluno; } else { return null; } })
      );
  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.taURL + "/aluno/cadastro")
      .pipe(
        retry(2)
      );
  }
  getAlunoNome(): Observable<String> {
    return this.http.get<String>(this.taURL + "/aluno/login")
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
}