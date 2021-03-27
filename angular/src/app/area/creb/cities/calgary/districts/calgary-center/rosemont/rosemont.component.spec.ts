import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosemontComponent } from './rosemont.component';

describe('RosemontComponent', () => {
  let component: RosemontComponent;
  let fixture: ComponentFixture<RosemontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosemontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosemontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
