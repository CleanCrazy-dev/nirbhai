import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartindaleComponent } from './martindale.component';

describe('MartindaleComponent', () => {
  let component: MartindaleComponent;
  let fixture: ComponentFixture<MartindaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartindaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartindaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
