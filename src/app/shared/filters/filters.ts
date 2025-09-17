import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class Filters {
  activeFilter = 'todos';

  setFilter(filtro: string) {
    this.activeFilter = filtro;
    // Aqui você pode emitir um evento para o pai filtrar os workshops
  }
}
