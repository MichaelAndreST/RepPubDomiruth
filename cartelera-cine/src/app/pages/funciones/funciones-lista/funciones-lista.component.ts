import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FuncionesService } from '../../../services/funcion.service';
import { Funcion } from '../../../models/funcion.model';

@Component({
  selector: 'app-funciones-lista',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 aquí importa RouterModule
  templateUrl: './funciones-lista.component.html',
  styleUrl: './funciones-lista.component.scss'
})
export class FuncionesListaComponent implements OnInit {
  funciones: Funcion[] = [];

  constructor(private funcionesService: FuncionesService) {}

  ngOnInit() {
    this.funcionesService.getFunciones().subscribe(f => {
      this.funciones = f;
    });
  }
}
