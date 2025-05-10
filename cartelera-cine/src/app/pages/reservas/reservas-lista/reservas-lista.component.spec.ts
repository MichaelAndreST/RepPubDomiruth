import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasListaComponent } from './reservas-lista.component';

describe('ReservasListaComponent', () => {
  let component: ReservasListaComponent;
  let fixture: ComponentFixture<ReservasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
