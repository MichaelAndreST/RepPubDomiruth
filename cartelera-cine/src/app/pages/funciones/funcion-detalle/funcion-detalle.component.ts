import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FuncionesService } from '../../../services/funcion.service';
import { Funcion } from '../../../models/funcion.model';

@Component({
  selector: 'app-funcion-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './funcion-detalle.component.html',
  styleUrl: './funcion-detalle.component.scss'
})
export class FuncionDetalleComponent implements OnInit {
  funcion?: Funcion;

  constructor(
    private route: ActivatedRoute,
    private funcionesService: FuncionesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionesService.getFuncion(id).subscribe(f => {
      this.funcion = f;
    });
  }
}
