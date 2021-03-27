import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnaporeComponent } from './midnapore.component';

describe('MidnaporeComponent', () => {
  let component: MidnaporeComponent;
  let fixture: ComponentFixture<MidnaporeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidnaporeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidnaporeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

