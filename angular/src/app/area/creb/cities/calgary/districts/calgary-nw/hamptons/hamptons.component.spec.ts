import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamptonsComponent } from './hamptons.component';

describe('HamptonsComponent', () => {
  let component: HamptonsComponent;
  let fixture: ComponentFixture<HamptonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamptonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamptonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
