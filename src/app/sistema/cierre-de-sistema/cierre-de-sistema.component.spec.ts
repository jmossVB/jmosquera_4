import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreDeSistemaComponent } from './cierre-de-sistema.component';

describe('CierreDeSistemaComponent', () => {
  let component: CierreDeSistemaComponent;
  let fixture: ComponentFixture<CierreDeSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CierreDeSistemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CierreDeSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
