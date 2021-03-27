import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CougarRidgeComponent } from './cougar-ridge.component';

describe('CougarRidgeComponent', () => {
  let component: CougarRidgeComponent;
  let fixture: ComponentFixture<CougarRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CougarRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CougarRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});