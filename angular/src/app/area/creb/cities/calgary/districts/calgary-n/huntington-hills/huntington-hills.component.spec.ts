import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingtonHillsComponent } from './huntington-hills.component';

describe('HuntingtonHillsComponent', () => {
  let component: HuntingtonHillsComponent;
  let fixture: ComponentFixture<HuntingtonHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntingtonHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntingtonHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

