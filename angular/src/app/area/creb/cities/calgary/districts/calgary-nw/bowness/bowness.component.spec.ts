import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BownessComponent } from './bowness.component';

describe('BownessComponent', () => {
  let component: BownessComponent;
  let fixture: ComponentFixture<BownessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BownessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BownessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
