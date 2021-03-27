import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoverComponent } from './dover.component';

describe('DoverComponent', () => {
  let component: DoverComponent;
  let fixture: ComponentFixture<DoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});