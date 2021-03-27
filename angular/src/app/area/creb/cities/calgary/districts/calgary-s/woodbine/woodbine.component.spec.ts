import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodbineComponent } from './woodbine.component';

describe('WoodbineComponent', () => {
  let component: WoodbineComponent;
  let fixture: ComponentFixture<WoodbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodbineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
