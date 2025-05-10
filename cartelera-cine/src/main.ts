import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component'; // Importa tu componente raíz
import { routes } from './app/app.routes'; // Importa las rutas que hayas configurado

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    HttpClientModule,  // Asegúrate de agregar HttpClientModule aquí
  ]
}).catch(err => console.error(err));