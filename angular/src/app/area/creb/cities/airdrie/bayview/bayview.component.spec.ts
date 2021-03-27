import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayviewComponent } from './bayview.component';

describe('BayviewComponent', () => {
  let component: BayviewComponent;
  let fixture: ComponentFixture<BayviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
