import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../models/reserva.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe((data) => {
      this.reservas = data;
    });
  }
}
