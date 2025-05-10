import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from '../models/funcion.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  private apiUrl = 'https://localhost:5001/api/Funciones';

  constructor(private http: HttpClient) {}

  getFunciones(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(this.apiUrl);
  }

  getFuncion(id: number): Observable<Funcion> {
    return this.http.get<Funcion>(`${this.apiUrl}/${id}`);
  }
}
