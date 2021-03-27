import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonavistaDownsComponent } from './bonavista-downs.component';

describe('BonavistaDownsComponent', () => {
  let component: BonavistaDownsComponent;
  let fixture: ComponentFixture<BonavistaDownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonavistaDownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonavistaDownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

