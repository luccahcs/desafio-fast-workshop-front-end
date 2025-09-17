import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService, Workshop } from '../services/workshops';
import { NgIf, NgFor, DatePipe } from '@angular/common';

@Component({
  selector: 'app-workshop-detalhe',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './workshop-detalhe.html',
  styleUrls: ['./workshop-detalhe.scss'],
  providers: [WorkshopsService]
})
export class WorkshopDetalhe implements OnInit, OnDestroy {
  workshop?: Workshop;
  private sub?: any;

  constructor(
    private route: ActivatedRoute,
    private workshopsService: WorkshopsService,
    private cdr: ChangeDetectorRef
  ) {}

  // Método para inscrever participante
  inscreverParticipante() {
    if (!this.workshop) return;
    const nome = prompt('Digite seu nome para se inscrever:');
    if (!nome || !nome.trim()) return;

    const id = this.workshop.id;
    this.workshopsService.registrarParticipante(id, nome.trim())
      .subscribe({
        next: () => {
          alert('Inscrição realizada com sucesso!');
          this.workshop?.participantes.push(nome.trim());
          this.cdr.detectChanges(); // força atualização da view
        },
        error: () => {
          alert('Erro ao inscrever participante.');
        }
      });
  }

  ngOnInit() {
    // Observa mudanças no parâmetro "id" da rota
    this.sub = this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log('Rota mudou, id:', id);

      if (!id) {
        this.workshop = undefined;
        return;
      }

      this.workshopsService.buscarPorId(id).subscribe({
        next: data => {
          this.workshop = data;
          this.cdr.detectChanges(); // atualiza a view imediatamente
          console.log('Workshop carregado:', data);
        },
        error: err => {
          console.error('Erro ao buscar workshop:', err);
          this.workshop = undefined;
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
