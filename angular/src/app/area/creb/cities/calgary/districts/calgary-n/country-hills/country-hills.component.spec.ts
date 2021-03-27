import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHillsComponent } from './country-hills.component';

describe('CountryHillsComponent', () => {
  let component: CountryHillsComponent;
  let fixture: ComponentFixture<CountryHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

