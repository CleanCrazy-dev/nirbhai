import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StonegateLandingComponent } from './stonegate-landing.component';

describe('StonegateLandingComponent', () => {
  let component: StonegateLandingComponent;
  let fixture: ComponentFixture<StonegateLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StonegateLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StonegateLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
