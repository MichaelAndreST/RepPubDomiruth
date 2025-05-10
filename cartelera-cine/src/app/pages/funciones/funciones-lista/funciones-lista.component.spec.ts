import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesListaComponent } from './funciones-lista.component';

describe('FuncionesListaComponent', () => {
  let component: FuncionesListaComponent;
  let fixture: ComponentFixture<FuncionesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionesListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
