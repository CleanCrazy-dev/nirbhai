import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleyRidgeComponent } from './valley-ridge.component';

describe('ValleyRidgeComponent', () => {
  let component: ValleyRidgeComponent;
  let fixture: ComponentFixture<ValleyRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleyRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValleyRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
