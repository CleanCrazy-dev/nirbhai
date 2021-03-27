import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAirwaysComponent } from './south-airways.component';

describe('SouthAirwaysComponent', () => {
  let component: SouthAirwaysComponent;
  let fixture: ComponentFixture<SouthAirwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthAirwaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAirwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
