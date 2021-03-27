import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaylandComponent } from './mayland.component';

describe('MaylandComponent', () => {
  let component: MaylandComponent;
  let fixture: ComponentFixture<MaylandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaylandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaylandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
