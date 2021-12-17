import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos.component';
import { AlunoService } from './aluno.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { LoginProfessorComponent } from './login-professor/login-professor.component';
import { PaginaDisciplinasComponent } from './pagina-disciplinas/pagina-disciplinas.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    CadastroComponent,
    PaginaInicialComponent,
    CadastroProfessorComponent,
    LoginAlunoComponent,
    LoginProfessorComponent,
    PaginaDisciplinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {
        path: 'alunos',
        component: AlunosComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'app-cadastro-professor',
        component: CadastroProfessorComponent
      },
      {
        path: 'app-login-aluno',
        component: LoginAlunoComponent
      },
      {
        path: 'app-login-professor',
        component: LoginProfessorComponent
      }
    ])
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
