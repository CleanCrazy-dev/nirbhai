import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageHillComponent } from './sage-hill.component';

describe('SageHillComponent', () => {
  let component: SageHillComponent;
  let fixture: ComponentFixture<SageHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

