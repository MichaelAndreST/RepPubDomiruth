import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../../services/pelicula.service';
import { Pelicula } from '../../../models/pelicula.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peliculas-list',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.scss']
})
export class PeliculasListComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }
}
