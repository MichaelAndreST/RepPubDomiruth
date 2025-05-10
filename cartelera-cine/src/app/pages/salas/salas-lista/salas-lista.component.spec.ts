import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasListaComponent } from './salas-lista.component';

describe('SalasListaComponent', () => {
  let component: SalasListaComponent;
  let fixture: ComponentFixture<SalasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalasListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
