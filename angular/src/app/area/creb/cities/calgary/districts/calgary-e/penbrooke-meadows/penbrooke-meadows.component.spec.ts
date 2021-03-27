import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenbrookeMeadowsComponent } from './penbrooke-meadows.component';

describe('PenbrookeMeadowsComponent', () => {
  let component: PenbrookeMeadowsComponent;
  let fixture: ComponentFixture<PenbrookeMeadowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenbrookeMeadowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenbrookeMeadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

