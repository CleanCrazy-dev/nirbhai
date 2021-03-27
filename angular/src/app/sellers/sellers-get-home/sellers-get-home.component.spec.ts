import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersGetHomeComponent } from './sellers-get-home.component';

describe('SellersGetHomeComponent', () => {
  let component: SellersGetHomeComponent;
  let fixture: ComponentFixture<SellersGetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersGetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersGetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
