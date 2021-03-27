import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthWindsongComponent } from './south-windsong.component';

describe('SouthWindsongComponent', () => {
  let component: SouthWindsongComponent;
  let fixture: ComponentFixture<SouthWindsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthWindsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthWindsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
