import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryCenterComponent } from './calgary-center.component';

describe('CalgaryCenterComponent', () => {
  let component: CalgaryCenterComponent;
  let fixture: ComponentFixture<CalgaryCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
