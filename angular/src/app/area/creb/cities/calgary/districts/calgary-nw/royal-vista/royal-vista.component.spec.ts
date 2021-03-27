import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalVistaComponent } from './royal-vista.component';

describe('RoyalVistaComponent', () => {
  let component: RoyalVistaComponent;
  let fixture: ComponentFixture<RoyalVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
