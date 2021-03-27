import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErinWoodsComponent } from './erin-woods.component';

describe('ErinWoodsComponent', () => {
  let component: ErinWoodsComponent;
  let fixture: ComponentFixture<ErinWoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErinWoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErinWoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});