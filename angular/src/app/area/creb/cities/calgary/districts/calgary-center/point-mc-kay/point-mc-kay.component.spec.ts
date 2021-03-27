import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointMcKayComponent } from './point-mc-kay.component';

describe('PointMcKayComponent', () => {
  let component: PointMcKayComponent;
  let fixture: ComponentFixture<PointMcKayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointMcKayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointMcKayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
