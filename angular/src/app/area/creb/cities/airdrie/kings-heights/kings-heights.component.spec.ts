import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsHeightsComponent } from './kings-heights.component';

describe('KingsHeightsComponent', () => {
  let component: KingsHeightsComponent;
  let fixture: ComponentFixture<KingsHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingsHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
