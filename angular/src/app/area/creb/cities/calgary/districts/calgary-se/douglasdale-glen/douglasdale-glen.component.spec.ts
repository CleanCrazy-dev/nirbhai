import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouglasdaleGlenComponent } from './douglasdale-glen.component';

describe('DouglasdaleGlenComponent', () => {
  let component: DouglasdaleGlenComponent;
  let fixture: ComponentFixture<DouglasdaleGlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouglasdaleGlenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DouglasdaleGlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

