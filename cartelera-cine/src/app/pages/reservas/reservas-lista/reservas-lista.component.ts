import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservas-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reservas-lista.component.html',
  styleUrl: './reservas-lista.component.scss'
})
export class ReservasListaComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservasService: ReservaService) {}

  ngOnInit(): void {
    this.reservasService.getReservas().subscribe(data => this.reservas = data);
  }
}
