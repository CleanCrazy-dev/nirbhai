import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrescentHeightsComponent } from './crescent-heights.component';

describe('CrescentHeightsComponent', () => {
  let component: CrescentHeightsComponent;
  let fixture: ComponentFixture<CrescentHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrescentHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrescentHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
