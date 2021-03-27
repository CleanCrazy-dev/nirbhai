import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolanHillComponent } from './nolan-hill.component';

describe('NolanHillComponent', () => {
  let component: NolanHillComponent;
  let fixture: ComponentFixture<NolanHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NolanHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NolanHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

