import { Component, OnInit } from '@angular/core';
import { WorkshopsService, Workshop } from '../services/workshops';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgFor, DatePipe, DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-workshops-lista',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    NgFor,
    MatIconModule,
    DatePipe,
    DecimalPipe,
  ],
  templateUrl: './workshops-lista.html',
  styleUrls: ['./workshops-lista.scss'],
  providers: [WorkshopsService],
})
export class WorkshopsLista implements OnInit {
  workshops: Workshop[] = [];
  searchTerm: string = '';
  activeFilter: 'todos' | 'mes' = 'todos';

  constructor(private workshopsService: WorkshopsService) {}

  ngOnInit() {
    this.workshopsService.listarTodos().subscribe({
      next: (data) => {
        this.workshops = data;
      },
      error: (err) => {
        console.error('Erro ao buscar workshops:', err);
      },
    });
  }

  setFilter(filter: 'todos' | 'mes') {
    this.activeFilter = filter;
  }

  get filteredWorkshops(): Workshop[] {
    let filtered = this.workshops;
    if (this.searchTerm) {
      filtered = filtered.filter((w) =>
        w.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    if (this.activeFilter === 'mes') {
      const now = new Date();
      const mesAtual = now.getMonth() + 1;
      const anoAtual = now.getFullYear();
      filtered = filtered.filter((w) => {
        const [ano, mes] = w.dataRealizacao.split('-');
        return Number(mes) === mesAtual && Number(ano) === anoAtual;
      });
    }
    return filtered;
  }
}
