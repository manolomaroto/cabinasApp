import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinasComponent } from './cabinas.component';

describe('CabinasComponent', () => {
  let component: CabinasComponent;
  let fixture: ComponentFixture<CabinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
