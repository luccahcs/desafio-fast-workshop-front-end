import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { WorkshopsService, Workshop } from '../services/workshops';

@Component({
  selector: 'app-participacao-graficos',
  standalone: true,
  imports: [MatIconModule, BaseChartDirective],
  templateUrl: './participacao-graficos.html',
  styleUrl: './participacao-graficos.scss',
  providers: [WorkshopsService],
})
export class ParticipacaoGraficos implements OnInit {
  barChartData: any = { labels: [], datasets: [] };
  barChartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
  };

  pieChartData: any = { labels: [], datasets: [] };
  pieChartOptions = {
    responsive: true,
    plugins: { legend: { position: 'bottom' as const } },
  };

  constructor(private workshopsService: WorkshopsService) {}

  ngOnInit() {
    this.workshopsService.listarTodos().subscribe((workshops: Workshop[]) => {
      // Gráfico de barras: Participação por colaborador
      const colaboradorCount: Record<string, number> = {};
      workshops.forEach((w) => {
        w.participantes?.forEach((nome: string) => {
          colaboradorCount[nome] = (colaboradorCount[nome] || 0) + 1;
        });
      });
      const barLabels = Object.keys(colaboradorCount);
      const barData = Object.values(colaboradorCount);
      this.barChartData = {
        labels: barLabels,
        datasets: [{ label: 'Participações', data: barData, backgroundColor: '#1976d2' }],
      };

      // Gráfico de pizza: Colaboradores por Workshop
      const pieLabels = workshops.map((w) => w.nome);
      const pieData = workshops.map((w) => w.participantes?.length || 0);
      this.pieChartData = {
        labels: pieLabels,
        datasets: [
          {
            label: 'Colaboradores',
            data: pieData,
            backgroundColor: [
              '#1976d2',
              '#43a047',
              '#fbc02d',
              '#e53935',
              '#8e24aa',
              '#00bcd4',
              '#ff7043',
              '#cddc39',
            ],
          },
        ],
      };
    });
  }
}
