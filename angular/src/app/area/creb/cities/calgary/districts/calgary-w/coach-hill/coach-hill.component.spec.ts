import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachHillComponent } from './coach-hill.component';

describe('CoachHillComponent', () => {
  let component: CoachHillComponent;
  let fixture: ComponentFixture<CoachHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});