import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  peliculas: Pelicula[] = [];  // Aquí especificamos que es un arreglo de objetos de tipo Pelicula

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit() {
    this.peliculaService.getPeliculas().subscribe((data: Pelicula[]) => {
      this.peliculas = data;
    });
  }
}
