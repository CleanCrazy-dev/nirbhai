import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgarySComponent } from './calgary-s.component';

describe('CalgarySComponent', () => {
  let component: CalgarySComponent;
  let fixture: ComponentFixture<CalgarySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgarySComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgarySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
