import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowFallsComponent } from './rainbow-falls.component';

describe('RainbowFallsComponent', () => {
  let component: RainbowFallsComponent;
  let fixture: ComponentFixture<RainbowFallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbowFallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowFallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
