import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbankHillComponent } from './springbank-hill.component';

describe('SpringbankHillComponent', () => {
  let component: SpringbankHillComponent;
  let fixture: ComponentFixture<SpringbankHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringbankHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringbankHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
