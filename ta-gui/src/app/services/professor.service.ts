import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Professor } from '../../../../common/Professor';
@Injectable()
export class professorService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:8081';
  professor :Professor=new Professor ();
  constructor(private http: HttpClient) { }

  enviarProfessor(prof: Professor): Observable<any> {
    return this.http.post<any>(this.taURL + "/professor/cadastro", prof)
      
  }

  
  getProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.taURL + "/professor/cadastro")
      .pipe(
        retry(2)
      );
  }
  logarProfessor(cpf: string,senha: string): Observable<any> {
    return this.http.post<any>(this.taURL + "/professor/login",
    {
      cpf: cpf,
      senha: senha
    });
      
  }

}