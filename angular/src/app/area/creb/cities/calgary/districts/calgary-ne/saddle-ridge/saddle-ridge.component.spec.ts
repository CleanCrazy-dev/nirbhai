import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddleRidgeComponent } from './saddle-ridge.component';

describe('SaddleRidgeComponent', () => {
  let component: SaddleRidgeComponent;
  let fixture: ComponentFixture<SaddleRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaddleRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaddleRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
