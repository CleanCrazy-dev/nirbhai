import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxstoneComponent } from './luxstone.component';

describe('LuxstoneComponent', () => {
  let component: LuxstoneComponent;
  let fixture: ComponentFixture<LuxstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxstoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
