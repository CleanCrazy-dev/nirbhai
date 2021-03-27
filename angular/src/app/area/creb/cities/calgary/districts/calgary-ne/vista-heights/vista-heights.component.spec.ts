import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHeightsComponent } from './vista-heights.component';

describe('VistaHeightsComponent', () => {
  let component: VistaHeightsComponent;
  let fixture: ComponentFixture<VistaHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
