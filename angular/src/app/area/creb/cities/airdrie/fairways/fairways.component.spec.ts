import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairwaysComponent } from './fairways.component';

describe('FairwaysComponent', () => {
  let component: FairwaysComponent;
  let fixture: ComponentFixture<FairwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairwaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
