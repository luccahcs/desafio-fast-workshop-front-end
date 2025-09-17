import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Workshop {
  id: number;
  nome: string;
  dataRealizacao: string;
  descricao: string;
  participantes: any[];
}

@Injectable({
  providedIn: 'root'
})  
export class WorkshopsService {
  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>('http://localhost:5180/api/workshops');
  }

  buscarPorId(id: number): Observable<Workshop> {
    return this.http.get<Workshop>(`http://localhost:5180/api/workshops/${id}`);
  }
  registrarParticipante(id: number, nome: string): Observable<any> {
    return this.http.post(`http://localhost:5180/api/workshops/${id}/participant-register`, { name: nome });
  }
}