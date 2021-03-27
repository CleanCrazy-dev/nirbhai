import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverCreekComponent } from './silver-creek.component';

describe('SilverCreekComponent', () => {
  let component: SilverCreekComponent;
  let fixture: ComponentFixture<SilverCreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverCreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
