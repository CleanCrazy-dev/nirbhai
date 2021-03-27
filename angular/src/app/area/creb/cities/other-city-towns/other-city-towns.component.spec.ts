import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCityTownsComponent } from './other-city-towns.component';

describe('OtherCityTownsComponent', () => {
  let component: OtherCityTownsComponent;
  let fixture: ComponentFixture<OtherCityTownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCityTownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCityTownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
