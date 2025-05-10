import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasService } from '../../../services/sala.service';
import { Sala } from '../../../models/sala.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-salas-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './salas-lista.component.html',
  styleUrl: './salas-lista.component.scss'
})
export class SalasListaComponent implements OnInit {
  salas: Sala[] = [];

  constructor(private salasService: SalasService) {}

  ngOnInit(): void {
    this.salasService.getSalas().subscribe(data => this.salas = data);
  }
}
