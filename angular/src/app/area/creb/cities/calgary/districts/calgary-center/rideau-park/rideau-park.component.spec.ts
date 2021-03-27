import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideauParkComponent } from './rideau-park.component';

describe('RideauParkComponent', () => {
  let component: RideauParkComponent;
  let fixture: ComponentFixture<RideauParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideauParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideauParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
