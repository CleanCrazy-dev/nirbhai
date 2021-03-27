import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetonComponent } from './seton.component';

describe('SetonComponent', () => {
  let component: SetonComponent;
  let fixture: ComponentFixture<SetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

