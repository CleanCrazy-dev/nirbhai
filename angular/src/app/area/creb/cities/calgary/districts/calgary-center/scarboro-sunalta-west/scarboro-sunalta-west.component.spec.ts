import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarboroSunaltaWestComponent } from './scarboro-sunalta-west.component';

describe('ScarboroSunaltaWestComponent', () => {
  let component: ScarboroSunaltaWestComponent;
  let fixture: ComponentFixture<ScarboroSunaltaWestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScarboroSunaltaWestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScarboroSunaltaWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
