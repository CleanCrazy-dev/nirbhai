import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestLawnComponent } from './forest-lawn.component';

describe('ForestLawnComponent', () => {
  let component: ForestLawnComponent;
  let fixture: ComponentFixture<ForestLawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestLawnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

