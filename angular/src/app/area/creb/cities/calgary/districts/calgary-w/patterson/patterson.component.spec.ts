import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PattersonComponent } from './patterson.component';

describe('PattersonComponent', () => {
  let component: PattersonComponent;
  let fixture: ComponentFixture<PattersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PattersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PattersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
