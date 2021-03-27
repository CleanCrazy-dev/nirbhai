import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalOakComponent } from './royal-oak.component';

describe('RoyalOakComponent', () => {
  let component: RoyalOakComponent;
  let fixture: ComponentFixture<RoyalOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
