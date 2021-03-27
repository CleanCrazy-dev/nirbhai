import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageNavBarComponent } from './mortgage-nav-bar.component';

describe('MortgageNavBarComponent', () => {
  let component: MortgageNavBarComponent;
  let fixture: ComponentFixture<MortgageNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
