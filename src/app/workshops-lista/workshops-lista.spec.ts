import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsLista } from './workshops-lista';

describe('WorkshopsLista', () => {
  let component: WorkshopsLista;
  let fixture: ComponentFixture<WorkshopsLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
