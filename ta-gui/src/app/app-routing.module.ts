import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaDisciplinasComponent } from './pagina-disciplinas/pagina-disciplinas.component';
import { PaginaOfertaDisciplinasComponent } from './pagina-oferta-disciplinas/pagina-oferta-disciplinas.component';

const routes: Routes = [
  { path: 'app-pagina-oferta-disciplinas', component: PaginaOfertaDisciplinasComponent },
  { path: 'app-pagina-cadastro-disciplinas', component: PaginaDisciplinasComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
