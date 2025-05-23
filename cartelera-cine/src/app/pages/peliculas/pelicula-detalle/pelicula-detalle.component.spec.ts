import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetalleComponent } from './pelicula-detalle.component';

describe('PeliculaDetalleComponent', () => {
  let component: PeliculaDetalleComponent;
  let fixture: ComponentFixture<PeliculaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
