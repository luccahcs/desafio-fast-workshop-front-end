import { TestBed } from '@angular/core/testing';
import { ColaboradoresService } from './colaboradores';

describe('ColaboradoresService', () => {
  let service: ColaboradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaboradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});