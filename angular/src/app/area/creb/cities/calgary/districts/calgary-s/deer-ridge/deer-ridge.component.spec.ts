import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerRidgeComponent } from './deer-ridge.component';

describe('DeerRidgeComponent', () => {
  let component: DeerRidgeComponent;
  let fixture: ComponentFixture<DeerRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeerRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

