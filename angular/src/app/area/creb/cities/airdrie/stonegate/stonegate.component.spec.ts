import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StonegateComponent } from './stonegate.component';

describe('StonegateComponent', () => {
  let component: StonegateComponent;
  let fixture: ComponentFixture<StonegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StonegateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StonegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
