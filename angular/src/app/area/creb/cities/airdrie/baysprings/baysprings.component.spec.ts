import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayspringsComponent } from './baysprings.component';

describe('BayspringsComponent', () => {
  let component: BayspringsComponent;
  let fixture: ComponentFixture<BayspringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayspringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayspringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
