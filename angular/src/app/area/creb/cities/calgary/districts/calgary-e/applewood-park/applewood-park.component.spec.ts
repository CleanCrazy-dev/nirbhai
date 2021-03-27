import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplewoodParkComponent } from './applewood-park.component';

describe('ApplewoodParkComponent', () => {
  let component: ApplewoodParkComponent;
  let fixture: ComponentFixture<ApplewoodParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplewoodParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplewoodParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});