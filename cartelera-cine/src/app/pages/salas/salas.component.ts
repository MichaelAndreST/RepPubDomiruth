import { Component, OnInit } from '@angular/core';
import { SalaService } from '../../services/sala.service';
import { Sala } from '../../models/sala.model';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {
  salas: Sala[] = [];

  constructor(private salaService: SalaService) { }

  ngOnInit(): void {
    this.salaService.getSalas().subscribe((data) => {
      this.salas = data;
    });
  }
}
