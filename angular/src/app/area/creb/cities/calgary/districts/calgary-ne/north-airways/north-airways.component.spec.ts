import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthAirwaysComponent } from './north-airways.component';

describe('NorthAirwaysComponent', () => {
  let component: NorthAirwaysComponent;
  let fixture: ComponentFixture<NorthAirwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthAirwaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthAirwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
