import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristieParkComponent } from './christie-park.component';

describe('ChristieParkComponent', () => {
  let component: ChristieParkComponent;
  let fixture: ComponentFixture<ChristieParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristieParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristieParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});