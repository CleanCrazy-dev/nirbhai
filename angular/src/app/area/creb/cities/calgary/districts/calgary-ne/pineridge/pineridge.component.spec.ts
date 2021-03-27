import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineridgeComponent } from './pineridge.component';

describe('PineridgeComponent', () => {
  let component: PineridgeComponent;
  let fixture: ComponentFixture<PineridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PineridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PineridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
