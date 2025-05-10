import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de importar las rutas

@Component({
  selector: 'app-root',
  standalone: true, // Marca el componente como standalone
  imports: [RouterModule], // Importa RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-app-angular';
}
