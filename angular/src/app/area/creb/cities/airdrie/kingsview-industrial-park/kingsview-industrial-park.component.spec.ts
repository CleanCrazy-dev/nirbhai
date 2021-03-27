import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsviewIndustrialParkComponent } from './kingsview-industrial-park.component';

describe('KingsviewIndustrialParkComponent', () => {
  let component: KingsviewIndustrialParkComponent;
  let fixture: ComponentFixture<KingsviewIndustrialParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingsviewIndustrialParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsviewIndustrialParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
