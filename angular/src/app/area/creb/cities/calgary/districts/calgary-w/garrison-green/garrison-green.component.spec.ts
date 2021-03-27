import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrisonGreenComponent } from './garrison-green.component';

describe('GarrisonGreenComponent', () => {
  let component: GarrisonGreenComponent;
  let fixture: ComponentFixture<GarrisonGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarrisonGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarrisonGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});