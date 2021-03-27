import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryInternationalAirportComponent } from './calgary-international-airport.component';

describe('CalgaryInternationalAirportComponent', () => {
  let component: CalgaryInternationalAirportComponent;
  let fixture: ComponentFixture<CalgaryInternationalAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryInternationalAirportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryInternationalAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
