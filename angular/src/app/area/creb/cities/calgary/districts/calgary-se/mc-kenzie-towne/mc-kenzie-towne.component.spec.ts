import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McKenzieTowneComponent } from './mc-kenzie-towne.component';

describe('McKenzieTowneComponent', () => {
  let component: McKenzieTowneComponent;
  let fixture: ComponentFixture<McKenzieTowneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McKenzieTowneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McKenzieTowneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

