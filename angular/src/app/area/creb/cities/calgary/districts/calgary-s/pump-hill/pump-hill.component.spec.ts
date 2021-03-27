import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpHillComponent } from './pump-hill.component';

describe('PumpHillComponent', () => {
  let component: PumpHillComponent;
  let fixture: ComponentFixture<PumpHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
