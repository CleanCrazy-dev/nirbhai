import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HawkwoodComponent } from './hawkwood.component';

describe('HawkwoodComponent', () => {
  let component: HawkwoodComponent;
  let fixture: ComponentFixture<HawkwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HawkwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HawkwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
