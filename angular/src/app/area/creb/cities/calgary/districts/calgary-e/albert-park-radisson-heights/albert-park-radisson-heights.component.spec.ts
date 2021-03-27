import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertParkRadissonHeightsComponent } from './albert-park-radisson-heights.component';

describe('AlbertParkRadissonHeightsComponent', () => {
  let component: AlbertParkRadissonHeightsComponent;
  let fixture: ComponentFixture<AlbertParkRadissonHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbertParkRadissonHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertParkRadissonHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
