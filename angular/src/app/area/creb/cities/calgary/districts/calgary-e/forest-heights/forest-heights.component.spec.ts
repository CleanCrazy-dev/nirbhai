import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestHeightsComponent } from './forest-heights.component';

describe('ForestHeightsComponent', () => {
  let component: ForestHeightsComponent;
  let fixture: ComponentFixture<ForestHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

