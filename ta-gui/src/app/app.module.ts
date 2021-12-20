import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoService } from './services/aluno.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { LoginProfessorComponent } from './login-professor/login-professor.component';
import { PaginaDisciplinasComponent } from './pagina-disciplinas/pagina-disciplinas.component';
import { PaginaOfertaDisciplinasComponent } from './pagina-oferta-disciplinas/pagina-oferta-disciplinas.component';
import { DisciplinasService } from './services/disciplinas.service';
import {  professorService } from './services/professor.service';
import { Teste } from './services/teste.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PaginaInicialComponent,
    CadastroProfessorComponent,
    LoginAlunoComponent,
    LoginProfessorComponent,
    PaginaDisciplinasComponent,
    PaginaOfertaDisciplinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
    
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
      },

      { 
           path:'app-pagina-oferta-disciplinas',
           component:PaginaOfertaDisciplinasComponent

      },

      { 
           path:'app-pagina-cadastro-disciplinas',
           component:PaginaDisciplinasComponent

      }
    ])
  ],
  providers: [AlunoService,DisciplinasService,professorService,Teste],
  bootstrap: [AppComponent]
})
export class AppModule { }
