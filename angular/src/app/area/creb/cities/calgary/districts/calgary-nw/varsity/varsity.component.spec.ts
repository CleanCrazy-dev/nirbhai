import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarsityComponent } from './varsity.component';

describe('VarsityComponent', () => {
  let component: VarsityComponent;
  let fixture: ComponentFixture<VarsityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarsityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarsityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
