import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PeliculaService } from '../../../services/pelicula.service';
import { Pelicula } from '../../../models/pelicula.model';

@Component({
  selector: 'app-pelicula-detalle',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.scss']
})
export class PeliculaDetalleComponent implements OnInit {
  pelicula: Pelicula | undefined;

  constructor(
    private peliculasService: PeliculaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peliculasService.getPelicula(id).subscribe((data) => {
      this.pelicula = data;
    });
  }
}
