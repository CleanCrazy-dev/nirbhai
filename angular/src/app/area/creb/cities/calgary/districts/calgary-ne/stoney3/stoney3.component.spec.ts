import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stoney3Component } from './stoney3.component';

describe('Stoney3Component', () => {
  let component: Stoney3Component;
  let fixture: ComponentFixture<Stoney3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stoney3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stoney3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
