import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillriseComponent } from './millrise.component';

describe('MillriseComponent', () => {
  let component: MillriseComponent;
  let fixture: ComponentFixture<MillriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MillriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

