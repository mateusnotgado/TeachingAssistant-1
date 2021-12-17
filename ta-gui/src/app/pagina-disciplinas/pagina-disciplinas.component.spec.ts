import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDisciplinasComponent } from './pagina-disciplinas.component';

describe('PaginaDisciplinasComponent', () => {
  let component: PaginaDisciplinasComponent;
  let fixture: ComponentFixture<PaginaDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
