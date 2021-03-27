import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingstonComponent } from './livingston.component';

describe('LivingstonComponent', () => {
  let component: LivingstonComponent;
  let fixture: ComponentFixture<LivingstonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingstonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

