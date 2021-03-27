import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElbowParkComponent } from './elbow-park.component';

describe('ElbowParkComponent', () => {
  let component: ElbowParkComponent;
  let fixture: ComponentFixture<ElbowParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElbowParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElbowParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
