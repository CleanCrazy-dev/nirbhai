import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagleRidgeComponent } from './eagle-ridge.component';

describe('EagleRidgeComponent', () => {
  let component: EagleRidgeComponent;
  let fixture: ComponentFixture<EagleRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagleRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagleRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

