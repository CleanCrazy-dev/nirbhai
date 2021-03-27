import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stoney2Component } from './stoney2.component';

describe('Stoney2Component', () => {
  let component: Stoney2Component;
  let fixture: ComponentFixture<Stoney2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stoney2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stoney2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
