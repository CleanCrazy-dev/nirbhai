import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineCreekComponent } from './pine-creek.component';

describe('PineCreekComponent', () => {
  let component: PineCreekComponent;
  let fixture: ComponentFixture<PineCreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PineCreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PineCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
