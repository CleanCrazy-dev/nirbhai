import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelvedereComponent } from './belvedere.component';

describe('BelvedereComponent', () => {
  let component: BelvedereComponent;
  let fixture: ComponentFixture<BelvedereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelvedereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelvedereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
