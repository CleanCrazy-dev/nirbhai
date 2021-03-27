import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McKenzieLakeComponent } from './mc-kenzie-lake.component';

describe('McKenzieLakeComponent', () => {
  let component: McKenzieLakeComponent;
  let fixture: ComponentFixture<McKenzieLakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McKenzieLakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McKenzieLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

