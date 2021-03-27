import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoSellingComponent } from './who-selling.component';

describe('WhoSellingComponent', () => {
  let component: WhoSellingComponent;
  let fixture: ComponentFixture<WhoSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoSellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
