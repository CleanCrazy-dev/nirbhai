import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilveradoComponent } from './silverado.component';

describe('SilveradoComponent', () => {
  let component: SilveradoComponent;
  let fixture: ComponentFixture<SilveradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilveradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilveradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
