import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkhillComponent } from './parkhill.component';

describe('ParkhillComponent', () => {
  let component: ParkhillComponent;
  let fixture: ComponentFixture<ParkhillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkhillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkhillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
