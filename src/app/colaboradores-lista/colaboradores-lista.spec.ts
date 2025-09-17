import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresLista } from './colaboradores-lista';

describe('ColaboradoresLista', () => {
  let component: ColaboradoresLista;
  let fixture: ComponentFixture<ColaboradoresLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradoresLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
