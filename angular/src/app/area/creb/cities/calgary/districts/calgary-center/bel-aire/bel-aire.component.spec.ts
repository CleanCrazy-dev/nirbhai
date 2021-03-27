import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelAireComponent } from './bel-aire.component';

describe('BelAireComponent', () => {
  let component: BelAireComponent;
  let fixture: ComponentFixture<BelAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelAireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
