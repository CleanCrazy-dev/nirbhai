import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestLawnIndustrialComponent } from './forest-lawn-industrial.component';

describe('ForestLawnIndustrialComponent', () => {
  let component: ForestLawnIndustrialComponent;
  let fixture: ComponentFixture<ForestLawnIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestLawnIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestLawnIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

