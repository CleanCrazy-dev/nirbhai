import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlendaleComponent } from './glendale.component';

describe('GlendaleComponent', () => {
  let component: GlendaleComponent;
  let fixture: ComponentFixture<GlendaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlendaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlendaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
