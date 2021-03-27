import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkSellingComponent } from './think-selling.component';

describe('ThinkSellingComponent', () => {
  let component: ThinkSellingComponent;
  let fixture: ComponentFixture<ThinkSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkSellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
