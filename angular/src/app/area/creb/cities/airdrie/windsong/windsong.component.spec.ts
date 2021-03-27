import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindsongComponent } from './windsong.component';

describe('WindsongComponent', () => {
  let component: WindsongComponent;
  let fixture: ComponentFixture<WindsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
