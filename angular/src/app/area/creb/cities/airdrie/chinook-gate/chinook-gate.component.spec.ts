import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinookGateComponent } from './chinook-gate.component';

describe('ChinookGateComponent', () => {
  let component: ChinookGateComponent;
  let fixture: ComponentFixture<ChinookGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinookGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinookGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
