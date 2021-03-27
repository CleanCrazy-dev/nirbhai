import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaldenComponent } from './walden.component';

describe('WaldenComponent', () => {
  let component: WaldenComponent;
  let fixture: ComponentFixture<WaldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaldenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
