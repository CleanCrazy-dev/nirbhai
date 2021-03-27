import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastShepardIndustrialComponent } from './east-shepard-industrial.component';

describe('EastShepardIndustrialComponent', () => {
  let component: EastShepardIndustrialComponent;
  let fixture: ComponentFixture<EastShepardIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastShepardIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastShepardIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

