import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconridgeComponent } from './falconridge.component';

describe('FalconridgeComponent', () => {
  let component: FalconridgeComponent;
  let fixture: ComponentFixture<FalconridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
