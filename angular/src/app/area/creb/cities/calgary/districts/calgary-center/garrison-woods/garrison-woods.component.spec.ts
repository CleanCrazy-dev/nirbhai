import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrisonWoodsComponent } from './garrison-woods.component';

describe('GarrisonWoodsComponent', () => {
  let component: GarrisonWoodsComponent;
  let fixture: ComponentFixture<GarrisonWoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarrisonWoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarrisonWoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
