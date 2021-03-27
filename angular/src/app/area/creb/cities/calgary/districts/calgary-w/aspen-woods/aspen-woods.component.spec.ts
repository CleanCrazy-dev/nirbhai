import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspenWoodsComponent } from './aspen-woods.component';

describe('AspenWoodsComponent', () => {
  let component: AspenWoodsComponent;
  let fixture: ComponentFixture<AspenWoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspenWoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspenWoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});