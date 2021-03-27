import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersNavBarComponent } from './buyers-nav-bar.component';

describe('BuyersNavBarComponent', () => {
  let component: BuyersNavBarComponent;
  let fixture: ComponentFixture<BuyersNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyersNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
