import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapleRidgeComponent } from './maple-ridge.component';

describe('MapleRidgeComponent', () => {
  let component: MapleRidgeComponent;
  let fixture: ComponentFixture<MapleRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapleRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapleRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

