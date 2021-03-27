import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShepardIndustrialComponent } from './shepard-industrial.component';

describe('ShepardIndustrialComponent', () => {
  let component: ShepardIndustrialComponent;
  let fixture: ComponentFixture<ShepardIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShepardIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShepardIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

