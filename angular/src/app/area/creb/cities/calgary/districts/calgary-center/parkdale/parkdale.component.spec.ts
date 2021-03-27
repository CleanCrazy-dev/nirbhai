import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkdaleComponent } from './parkdale.component';

describe('ParkdaleComponent', () => {
  let component: ParkdaleComponent;
  let fixture: ComponentFixture<ParkdaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkdaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkdaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
