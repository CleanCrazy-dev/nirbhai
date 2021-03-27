import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillowParkComponent } from './willow-park.component';

describe('WillowParkComponent', () => {
  let component: WillowParkComponent;
  let fixture: ComponentFixture<WillowParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillowParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillowParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
