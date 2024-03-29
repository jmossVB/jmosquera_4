import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosPorProductoComponent } from './ingresos-por-producto.component';

describe('IngresosPorProductoComponent', () => {
  let component: IngresosPorProductoComponent;
  let fixture: ComponentFixture<IngresosPorProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresosPorProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresosPorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
