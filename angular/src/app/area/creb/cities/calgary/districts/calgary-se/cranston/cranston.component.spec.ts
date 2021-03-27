import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranstonComponent } from './cranston.component';

describe('CranstonComponent', () => {
  let component: CranstonComponent;
  let fixture: ComponentFixture<CranstonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CranstonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CranstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

