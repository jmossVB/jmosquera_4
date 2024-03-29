import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDeProductosComponent } from './mantenimiento-de-productos.component';

describe('MantenimientoDeProductosComponent', () => {
  let component: MantenimientoDeProductosComponent;
  let fixture: ComponentFixture<MantenimientoDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoDeProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantenimientoDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
