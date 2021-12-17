import { Injectable } from '@angular/core';
import { Disciplina } from '../../../../common/disciplina'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:3000';

  disciplinas: Disciplina[]=[];
  constructor(private http: HttpClient) { 
    this.disciplinas=[];
  }
  criar(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<any>(this.taURL + "/disciplina", disciplina, { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { if (res.success) { return disciplina; } else { return null; } })
      );
  }

  atualizar(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.put<any>(this.taURL + "/disciplina", JSON.stringify(disciplina), { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { if (res.success) { return disciplina; } else { return null; } })
      );
  }

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.taURL + "/disciplinas")
      .pipe(
        retry(2)
      );
  }
}

