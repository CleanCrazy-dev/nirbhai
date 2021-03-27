import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SierraSpringsComponent } from './sierra-springs.component';

describe('SierraSpringsComponent', () => {
  let component: SierraSpringsComponent;
  let fixture: ComponentFixture<SierraSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SierraSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SierraSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
