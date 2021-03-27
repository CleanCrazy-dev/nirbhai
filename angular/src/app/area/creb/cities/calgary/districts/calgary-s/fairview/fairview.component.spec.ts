import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairviewComponent } from './fairview.component';

describe('FairviewComponent', () => {
  let component: FairviewComponent;
  let fixture: ComponentFixture<FairviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

