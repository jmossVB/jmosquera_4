import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembolsoDeCreditosComponent } from './desembolso-de-creditos.component';

describe('DesembolsoDeCreditosComponent', () => {
  let component: DesembolsoDeCreditosComponent;
  let fixture: ComponentFixture<DesembolsoDeCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesembolsoDeCreditosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesembolsoDeCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
