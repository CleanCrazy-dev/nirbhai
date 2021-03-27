import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvanstonComponent } from './evanston.component';

describe('EvanstonComponent', () => {
  let component: EvanstonComponent;
  let fixture: ComponentFixture<EvanstonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvanstonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvanstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

