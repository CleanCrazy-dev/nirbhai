import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillowbrookComponent } from './willowbrook.component';

describe('WillowbrookComponent', () => {
  let component: WillowbrookComponent;
  let fixture: ComponentFixture<WillowbrookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillowbrookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillowbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
