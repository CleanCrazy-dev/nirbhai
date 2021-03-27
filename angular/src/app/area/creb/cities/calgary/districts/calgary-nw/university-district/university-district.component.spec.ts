import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDistrictComponent } from './university-district.component';

describe('UniversityDistrictComponent', () => {
  let component: UniversityDistrictComponent;
  let fixture: ComponentFixture<UniversityDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
