import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakesideGreensComponent } from './lakeside-greens.component';

describe('LakesideGreensComponent', () => {
  let component: LakesideGreensComponent;
  let fixture: ComponentFixture<LakesideGreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakesideGreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakesideGreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
