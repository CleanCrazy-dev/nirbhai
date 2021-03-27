import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthGlenmoreParkComponent } from './north-glenmore-park.component';

describe('NorthGlenmoreParkComponent', () => {
  let component: NorthGlenmoreParkComponent;
  let fixture: ComponentFixture<NorthGlenmoreParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthGlenmoreParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthGlenmoreParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
