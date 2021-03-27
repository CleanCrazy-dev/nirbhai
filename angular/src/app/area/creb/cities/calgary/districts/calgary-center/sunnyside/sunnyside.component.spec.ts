import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnysideComponent } from './sunnyside.component';

describe('SunnysideComponent', () => {
  let component: SunnysideComponent;
  let fixture: ComponentFixture<SunnysideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunnysideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
