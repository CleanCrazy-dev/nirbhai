import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnsIndustrialComponent } from './burns-industrial.component';

describe('BurnsIndustrialComponent', () => {
  let component: BurnsIndustrialComponent;
  let fixture: ComponentFixture<BurnsIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnsIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnsIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
