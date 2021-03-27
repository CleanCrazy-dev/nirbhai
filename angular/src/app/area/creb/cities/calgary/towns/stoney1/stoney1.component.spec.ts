import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stoney1Component } from './stoney1.component';

describe('Stoney1Component', () => {
  let component: Stoney1Component;
  let fixture: ComponentFixture<Stoney1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stoney1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stoney1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
