import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManchesterIndustrialComponent } from './manchester-industrial.component';

describe('ManchesterIndustrialComponent', () => {
  let component: ManchesterIndustrialComponent;
  let fixture: ComponentFixture<ManchesterIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManchesterIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManchesterIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
