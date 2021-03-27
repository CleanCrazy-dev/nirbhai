import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McCallComponent } from './mc-call.component';

describe('McCallComponent', () => {
  let component: McCallComponent;
  let fixture: ComponentFixture<McCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
