import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlenbrookComponent } from './glenbrook.component';

describe('GlenbrookComponent', () => {
  let component: GlenbrookComponent;
  let fixture: ComponentFixture<GlenbrookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlenbrookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlenbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
