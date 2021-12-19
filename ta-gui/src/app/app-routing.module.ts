import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaOfertaDisciplinasComponent } from './pagina-oferta-disciplinas/pagina-oferta-disciplinas.component';

const routes: Routes = [
  { path: 'app-pagina-ofertar-disciplinas', component: PaginaOfertaDisciplinasComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
