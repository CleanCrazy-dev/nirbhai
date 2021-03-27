import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatPlainsComponent } from './great-plains.component';

describe('GreatPlainsComponent', () => {
  let component: GreatPlainsComponent;
  let fixture: ComponentFixture<GreatPlainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatPlainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatPlainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

