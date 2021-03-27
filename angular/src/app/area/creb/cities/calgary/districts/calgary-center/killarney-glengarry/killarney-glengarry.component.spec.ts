import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillarneyGlengarryComponent } from './killarney-glengarry.component';

describe('KillarneyGlengarryComponent', () => {
  let component: KillarneyGlengarryComponent;
  let fixture: ComponentFixture<KillarneyGlengarryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillarneyGlengarryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KillarneyGlengarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
