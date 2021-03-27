import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgdenComponent } from './ogden.component';

describe('OgdenComponent', () => {
  let component: OgdenComponent;
  let fixture: ComponentFixture<OgdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

