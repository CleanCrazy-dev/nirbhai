import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestHillsComponent } from './harvest-hills.component';

describe('HarvestHillsComponent', () => {
  let component: HarvestHillsComponent;
  let fixture: ComponentFixture<HarvestHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarvestHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

