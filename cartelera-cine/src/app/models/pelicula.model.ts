export class Pelicula {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: number;
  genero: string;
  imagen: string; // Asegúrate de que este campo esté presente y tenga un tipo adecuado

  constructor(id: number, nombre: string, descripcion: string, duracion: number, genero: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.genero = genero;
    this.imagen = imagen;
  }
}