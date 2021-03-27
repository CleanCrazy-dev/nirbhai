import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OakridgeComponent } from './oakridge.component';

describe('OakridgeComponent', () => {
  let component: OakridgeComponent;
  let fixture: ComponentFixture<OakridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OakridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OakridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
