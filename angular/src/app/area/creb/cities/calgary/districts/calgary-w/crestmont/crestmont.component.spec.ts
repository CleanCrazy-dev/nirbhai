import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestmontComponent } from './crestmont.component';

describe('CrestmontComponent', () => {
  let component: CrestmontComponent;
  let fixture: ComponentFixture<CrestmontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrestmontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrestmontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});