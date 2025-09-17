import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDetalhe } from './workshop-detalhe';

describe('WorkshopDetalhe', () => {
  let component: WorkshopDetalhe;
  let fixture: ComponentFixture<WorkshopDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
