import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinaTarjetaComponent } from './cabina-tarjeta.component';

describe('CabinaTarjetaComponent', () => {
  let component: CabinaTarjetaComponent;
  let fixture: ComponentFixture<CabinaTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinaTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
