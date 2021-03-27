import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacEwanGlenComponent } from './mac-ewan-glen.component';

describe('MacEwanGlenComponent', () => {
  let component: MacEwanGlenComponent;
  let fixture: ComponentFixture<MacEwanGlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacEwanGlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacEwanGlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

