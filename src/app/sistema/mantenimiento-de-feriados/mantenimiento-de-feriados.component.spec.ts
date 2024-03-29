import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDeFeriadosComponent } from './mantenimiento-de-feriados.component';

describe('MantenimientoDeFeriadosComponent', () => {
  let component: MantenimientoDeFeriadosComponent;
  let fixture: ComponentFixture<MantenimientoDeFeriadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoDeFeriadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantenimientoDeFeriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
