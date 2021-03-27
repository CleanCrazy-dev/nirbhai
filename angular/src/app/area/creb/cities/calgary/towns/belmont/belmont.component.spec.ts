import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelmontComponent } from './belmont.component';

describe('BelmontComponent', () => {
  let component: BelmontComponent;
  let fixture: ComponentFixture<BelmontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelmontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelmontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
