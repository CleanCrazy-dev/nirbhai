import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalHillComponent } from './signal-hill.component';

describe('SignalHillComponent', () => {
  let component: SignalHillComponent;
  let fixture: ComponentFixture<SignalHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
