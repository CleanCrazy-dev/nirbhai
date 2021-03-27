import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersNavBarComponent } from './sellers-nav-bar.component';

describe('SellersNavBarComponent', () => {
  let component: SellersNavBarComponent;
  let fixture: ComponentFixture<SellersNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
