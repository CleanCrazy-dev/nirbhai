import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthPointComponent } from './south-point.component';

describe('SouthPointComponent', () => {
  let component: SouthPointComponent;
  let fixture: ComponentFixture<SouthPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
