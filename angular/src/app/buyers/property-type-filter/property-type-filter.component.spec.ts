import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypeFilterComponent } from './property-type-filter.component';

describe('PropertyTypeFilterComponent', () => {
  let component: PropertyTypeFilterComponent;
  let fixture: ComponentFixture<PropertyTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyTypeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
