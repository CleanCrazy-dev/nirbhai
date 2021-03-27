import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerfootBusinessCentreComponent } from './deerfoot-business-centre.component';

describe('DeerfootBusinessCentreComponent', () => {
  let component: DeerfootBusinessCentreComponent;
  let fixture: ComponentFixture<DeerfootBusinessCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeerfootBusinessCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerfootBusinessCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
