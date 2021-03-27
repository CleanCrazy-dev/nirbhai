import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeviewLandingComponent } from './lakeview-landing.component';

describe('LakeviewLandingComponent', () => {
  let component: LakeviewLandingComponent;
  let fixture: ComponentFixture<LakeviewLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeviewLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeviewLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
