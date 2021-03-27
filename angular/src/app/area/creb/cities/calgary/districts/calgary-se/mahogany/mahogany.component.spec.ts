import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahoganyComponent } from './mahogany.component';

describe('MahoganyComponent', () => {
  let component: MahoganyComponent;
  let fixture: ComponentFixture<MahoganyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahoganyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahoganyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

