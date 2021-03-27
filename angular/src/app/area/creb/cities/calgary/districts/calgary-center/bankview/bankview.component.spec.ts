import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankviewComponent } from './bankview.component';

describe('BankviewComponent', () => {
  let component: BankviewComponent;
  let fixture: ComponentFixture<BankviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
