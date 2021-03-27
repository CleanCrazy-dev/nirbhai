import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinookParkComponent } from './chinook-park.component';

describe('ChinookParkComponent', () => {
  let component: ChinookParkComponent;
  let fixture: ComponentFixture<ChinookParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinookParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinookParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

