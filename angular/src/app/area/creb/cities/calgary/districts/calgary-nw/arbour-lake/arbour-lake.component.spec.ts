import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbourLakeComponent } from './arbour-lake.component';

describe('ArbourLakeComponent', () => {
  let component: ArbourLakeComponent;
  let fixture: ComponentFixture<ArbourLakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbourLakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbourLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
