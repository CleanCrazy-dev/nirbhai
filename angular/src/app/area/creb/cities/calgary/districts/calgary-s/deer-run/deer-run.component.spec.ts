import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerRunComponent } from './deer-run.component';

describe('DeerRunComponent', () => {
  let component: DeerRunComponent;
  let fixture: ComponentFixture<DeerRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeerRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

