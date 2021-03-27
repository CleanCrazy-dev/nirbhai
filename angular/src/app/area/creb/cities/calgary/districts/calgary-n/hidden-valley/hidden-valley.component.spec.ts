import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenValleyComponent } from './hidden-valley.component';

describe('HiddenValleyComponent', () => {
  let component: HiddenValleyComponent;
  let fixture: ComponentFixture<HiddenValleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenValleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

