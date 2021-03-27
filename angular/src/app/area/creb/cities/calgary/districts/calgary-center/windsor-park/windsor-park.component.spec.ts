import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindsorParkComponent } from './windsor-park.component';

describe('WindsorParkComponent', () => {
  let component: WindsorParkComponent;
  let fixture: ComponentFixture<WindsorParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindsorParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindsorParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
