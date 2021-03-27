import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSpringsComponent } from './big-springs.component';

describe('BigSpringsComponent', () => {
  let component: BigSpringsComponent;
  let fixture: ComponentFixture<BigSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
