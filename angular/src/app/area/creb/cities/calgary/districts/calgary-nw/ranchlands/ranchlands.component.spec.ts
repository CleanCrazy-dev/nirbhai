import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanchlandsComponent } from './ranchlands.component';

describe('RanchlandsComponent', () => {
  let component: RanchlandsComponent;
  let fixture: ComponentFixture<RanchlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanchlandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RanchlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
