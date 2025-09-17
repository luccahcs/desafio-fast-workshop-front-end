import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoGraficos } from './participacao-graficos';

describe('ParticipacaoGraficos', () => {
  let component: ParticipacaoGraficos;
  let fixture: ComponentFixture<ParticipacaoGraficos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipacaoGraficos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacaoGraficos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
