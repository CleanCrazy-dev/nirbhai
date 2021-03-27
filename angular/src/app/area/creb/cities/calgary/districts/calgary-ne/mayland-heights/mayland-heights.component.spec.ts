import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaylandHeightsComponent } from './mayland-heights.component';

describe('MaylandHeightsComponent', () => {
  let component: MaylandHeightsComponent;
  let fixture: ComponentFixture<MaylandHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaylandHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaylandHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
