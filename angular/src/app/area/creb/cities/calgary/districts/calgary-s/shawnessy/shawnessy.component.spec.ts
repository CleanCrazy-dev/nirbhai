import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawnessyComponent } from './shawnessy.component';

describe('ShawnessyComponent', () => {
  let component: ShawnessyComponent;
  let fixture: ComponentFixture<ShawnessyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShawnessyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShawnessyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
