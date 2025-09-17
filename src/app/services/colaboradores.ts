import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Colaborador {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  constructor(private http: HttpClient) {}

 listarTodos(): Observable<Colaborador[]> {
  console.log('Fetching colaboradores from API');
  return this.http.get<Colaborador[]>('http://localhost:5180/api/colaboradores');
}
}