import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosedaleComponent } from './rosedale.component';

describe('RosedaleComponent', () => {
  let component: RosedaleComponent;
  let fixture: ComponentFixture<RosedaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosedaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosedaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
