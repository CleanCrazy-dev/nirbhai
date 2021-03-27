import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KincoraComponent } from './kincora.component';

describe('KincoraComponent', () => {
  let component: KincoraComponent;
  let fixture: ComponentFixture<KincoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KincoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KincoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

