import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenTriangleComponent } from './golden-triangle.component';

describe('GoldenTriangleComponent', () => {
  let component: GoldenTriangleComponent;
  let fixture: ComponentFixture<GoldenTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenTriangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

