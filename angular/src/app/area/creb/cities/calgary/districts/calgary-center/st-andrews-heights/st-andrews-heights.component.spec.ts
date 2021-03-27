import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAndrewsHeightsComponent } from './st-andrews-heights.component';

describe('StAndrewsHeightsComponent', () => {
  let component: StAndrewsHeightsComponent;
  let fixture: ComponentFixture<StAndrewsHeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StAndrewsHeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StAndrewsHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
