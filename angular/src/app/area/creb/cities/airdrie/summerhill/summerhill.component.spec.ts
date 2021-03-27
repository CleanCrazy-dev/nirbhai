import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerhillComponent } from './summerhill.component';

describe('SummerhillComponent', () => {
  let component: SummerhillComponent;
  let fixture: ComponentFixture<SummerhillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerhillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerhillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
