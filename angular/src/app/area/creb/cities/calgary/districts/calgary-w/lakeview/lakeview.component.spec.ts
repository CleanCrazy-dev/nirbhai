import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeviewComponent } from './lakeview.component';

describe('LakeviewComponent', () => {
  let component: LakeviewComponent;
  let fixture: ComponentFixture<LakeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
