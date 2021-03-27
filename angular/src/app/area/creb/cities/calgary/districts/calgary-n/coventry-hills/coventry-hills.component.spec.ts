import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoventryHillsComponent } from './coventry-hills.component';

describe('CoventryHillsComponent', () => {
  let component: CoventryHillsComponent;
  let fixture: ComponentFixture<CoventryHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoventryHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoventryHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

