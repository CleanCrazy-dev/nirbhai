import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenviewComponent } from './greenview.component';

describe('GreenviewComponent', () => {
  let component: GreenviewComponent;
  let fixture: ComponentFixture<GreenviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
