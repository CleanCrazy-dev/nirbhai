import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHillsVillageComponent } from './country-hills-village.component';

describe('CountryHillsVillageComponent', () => {
  let component: CountryHillsVillageComponent;
  let fixture: ComponentFixture<CountryHillsVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryHillsVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHillsVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

