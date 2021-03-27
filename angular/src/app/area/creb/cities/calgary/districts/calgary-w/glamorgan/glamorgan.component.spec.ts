import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlamorganComponent } from './glamorgan.component';

describe('GlamorganComponent', () => {
  let component: GlamorganComponent;
  let fixture: ComponentFixture<GlamorganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlamorganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlamorganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});