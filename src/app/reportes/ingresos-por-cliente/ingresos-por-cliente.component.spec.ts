import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorClienteComponent } from './ingresos-por-cliente.component';

describe('IngresosPorClienteComponent', () => {
  let component: IngresosPorClienteComponent;
  let fixture: ComponentFixture<IngresosPorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresosPorClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresosPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
