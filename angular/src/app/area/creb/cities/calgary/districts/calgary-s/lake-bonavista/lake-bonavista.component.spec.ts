import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeBonavistaComponent } from './lake-bonavista.component';

describe('LakeBonavistaComponent', () => {
  let component: LakeBonavistaComponent;
  let fixture: ComponentFixture<LakeBonavistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeBonavistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeBonavistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

