import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { SalasComponent } from './pages/salas/salas.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { PeliculasListComponent } from './pages/peliculas/peliculas-list/peliculas-list.component';
import { PeliculaDetalleComponent } from './pages/peliculas/pelicula-detalle/pelicula-detalle.component';

export const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'peliculas', component: PeliculasListComponent },
  { path: 'peliculas/:id', component: PeliculaDetalleComponent },
  { path: 'funciones',
    loadComponent: () => import('./pages/funciones/funciones-lista/funciones-lista.component').then(m => m.FuncionesListaComponent)
  },
  { path: 'funciones/:id',
    loadComponent: () => import('./pages/funciones/funcion-detalle/funcion-detalle.component').then(m => m.FuncionDetalleComponent)
  },
  { path: 'salas',
    loadComponent: () => import('./pages/salas/salas-lista/salas-lista.component').then(m => m.SalasListaComponent)
  },
  { path: 'salas/:id',
    loadComponent: () => import('./pages/salas/sala-detalle/sala-detalle.component').then(m => m.SalaDetalleComponent)
  },
  { path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas-lista/reservas-lista.component').then(m => m.ReservasListaComponent)
  },
  { path: 'reservas/:id',
    loadComponent: () => import('./pages/reservas/reserva-detalle/reserva-detalle.component').then(m => m.ReservaDetalleComponent)
  }

];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);