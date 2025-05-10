import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SalasService } from '../../../services/sala.service';
import { Sala } from '../../../models/sala.model';

@Component({
  selector: 'app-sala-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sala-detalle.component.html',
  styleUrl: './sala-detalle.component.scss'
})
export class SalaDetalleComponent implements OnInit {
  sala?: Sala;

  constructor(
    private route: ActivatedRoute,
    private salasService: SalasService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.salasService.getSala(id).subscribe(s => this.sala = s);
  }
}
