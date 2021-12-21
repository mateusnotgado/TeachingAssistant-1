import { Injectable } from '@angular/core';
import { Disciplina } from '../models/Disciplina'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:8086';

  nomeProfessor:String="";
  constructor(private http: HttpClient) { 

  }
  criar(disciplina: Disciplina): Observable<any> {
    return this.http.post<any>(this.taURL + "/disciplina/cadastroDisciplina", disciplina)
     
  }

  atualizar(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.put<any>(this.taURL + "/disciplina/cadastroDisciplina", JSON.stringify(disciplina), { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { if (res.success) { return disciplina; } else { return null; } })
      );
  }

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.taURL + "/disciplina/ofertaDisciplina")
      .pipe(
        retry(2)
      );
  }
}

