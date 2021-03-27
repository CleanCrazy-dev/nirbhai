import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastFairviewIndustrialComponent } from './east-fairview-industrial.component';

describe('EastFairviewIndustrialComponent', () => {
  let component: EastFairviewIndustrialComponent;
  let fixture: ComponentFixture<EastFairviewIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastFairviewIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastFairviewIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

