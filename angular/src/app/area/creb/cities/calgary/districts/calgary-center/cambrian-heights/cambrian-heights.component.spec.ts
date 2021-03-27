import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambrianHeightsComponent } from './cambrian-heights.component';

describe('CambrianHeightsComponent', () => {
  let component: CambrianHeightsComponent;
  let fixture: ComponentFixture<CambrianHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambrianHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambrianHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
