import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDeClientesComponent } from './mantenimiento-de-clientes.component';

describe('MantenimientoDeClientesComponent', () => {
  let component: MantenimientoDeClientesComponent;
  let fixture: ComponentFixture<MantenimientoDeClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoDeClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantenimientoDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
