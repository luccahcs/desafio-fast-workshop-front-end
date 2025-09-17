import { Component } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../services/colaboradores';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-colaboradores-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './colaboradores-lista.html',
  styleUrl: './colaboradores-lista.scss'
})
export class ColaboradoresLista {
  colaboradores: Colaborador[] = [];
  searchTerm: string = '';

  constructor(private colaboradoresService: ColaboradoresService) {
    this.colaboradoresService.listarTodos().subscribe(data => {
      this.colaboradores = data;
    });
  }

  get filteredColaboradores(): Colaborador[] {
    if (!this.searchTerm) return this.colaboradores;
    return this.colaboradores.filter(c =>
      c.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}