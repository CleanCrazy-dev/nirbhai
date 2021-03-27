import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeddingtonHeightsComponent } from './beddington-heights.component';

describe('BeddingtonHeightsComponent', () => {
  let component: BeddingtonHeightsComponent;
  let fixture: ComponentFixture<BeddingtonHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeddingtonHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeddingtonHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

