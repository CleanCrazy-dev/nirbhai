import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityHeightsComponent } from './university-heights.component';

describe('UniversityHeightsComponent', () => {
  let component: UniversityHeightsComponent;
  let fixture: ComponentFixture<UniversityHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
