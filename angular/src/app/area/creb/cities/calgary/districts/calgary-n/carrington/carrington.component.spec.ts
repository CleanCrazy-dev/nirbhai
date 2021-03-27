import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarringtonComponent } from './carrington.component';

describe('CarringtonComponent', () => {
  let component: CarringtonComponent;
  let fixture: ComponentFixture<CarringtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarringtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarringtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

