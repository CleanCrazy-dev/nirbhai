import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairviewIndustrialComponent } from './fairview-industrial.component';

describe('FairviewIndustrialComponent', () => {
  let component: FairviewIndustrialComponent;
  let fixture: ComponentFixture<FairviewIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairviewIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairviewIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

