import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilliamstownComponent } from './williamstown.component';

describe('WilliamstownComponent', () => {
  let component: WilliamstownComponent;
  let fixture: ComponentFixture<WilliamstownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilliamstownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilliamstownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
