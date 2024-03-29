import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoDeCreditosComponent } from './pago-de-creditos.component';

describe('PagoDeCreditosComponent', () => {
  let component: PagoDeCreditosComponent;
  let fixture: ComponentFixture<PagoDeCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoDeCreditosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoDeCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
