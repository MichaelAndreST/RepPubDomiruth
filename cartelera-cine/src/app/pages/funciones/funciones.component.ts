import { Component, OnInit } from '@angular/core';
import { FuncionService } from '../../services/funcion.service';
import { Funcion } from '../../models/funcion.model';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.scss']
})
export class FuncionesComponent implements OnInit {
  funciones: Funcion[] = [];

  constructor(private funcionService: FuncionService) { }

  ngOnInit(): void {
    this.funcionService.getFunciones().subscribe((data) => {
      this.funciones = data;
    });
  }
}
