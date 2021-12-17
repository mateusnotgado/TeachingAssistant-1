import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOfertaDisciplinasComponent } from './pagina-oferta-disciplinas.component';

describe('PaginaOfertaDisciplinasComponent', () => {
  let component: PaginaOfertaDisciplinasComponent;
  let fixture: ComponentFixture<PaginaOfertaDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaOfertaDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOfertaDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
