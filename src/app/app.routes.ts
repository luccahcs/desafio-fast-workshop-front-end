import { Routes } from '@angular/router';
import { ColaboradoresLista } from './colaboradores-lista/colaboradores-lista';
import { WorkshopsLista } from './workshops-lista/workshops-lista';
import { WorkshopDetalhe } from './workshop-detalhe/workshop-detalhe';
import { ParticipacaoGraficos } from './participacao-graficos/participacao-graficos';

export const routes: Routes = [
  { path: '', redirectTo: 'workshops', pathMatch: 'full' },
  { path: 'colaboradores', component: ColaboradoresLista },
  { path: 'workshops', component: WorkshopsLista },
  { path: 'workshops/:id', component: WorkshopDetalhe },
  { path: 'graficos', component: ParticipacaoGraficos },
];