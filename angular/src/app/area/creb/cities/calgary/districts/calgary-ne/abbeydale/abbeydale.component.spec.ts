import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbeydaleComponent } from './abbeydale.component';

describe('AbbeydaleComponent', () => {
  let component: AbbeydaleComponent;
  let fixture: ComponentFixture<AbbeydaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbeydaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbeydaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
