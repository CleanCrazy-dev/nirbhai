import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenviewIndustrialParkComponent } from './greenview-industrial-park.component';

describe('GreenviewIndustrialParkComponent', () => {
  let component: GreenviewIndustrialParkComponent;
  let fixture: ComponentFixture<GreenviewIndustrialParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenviewIndustrialParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenviewIndustrialParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
