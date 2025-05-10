import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva.model';

@Component({
  selector: 'app-reserva-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reserva-detalle.component.html',
  styleUrl: './reserva-detalle.component.scss'
})
export class ReservaDetalleComponent implements OnInit {
  reserva?: Reserva;

  constructor(
    private route: ActivatedRoute,
    private reservasService: ReservaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reservasService.getReserva(id).subscribe(r => this.reserva = r);
  }
}
