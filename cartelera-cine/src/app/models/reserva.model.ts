import { Pelicula } from './pelicula.model';
import { Sala } from './sala.model';

export interface Reserva {
  id: number;
  cliente: string;
  email: string;
  cantidadEntradas: number;
  funcionId: number;
  pelicula: Pelicula;
  sala: Sala;
  fecha: string; 
  hora: string;
}
