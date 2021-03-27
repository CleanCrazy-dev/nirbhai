import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitolHillComponent } from './capitol-hill.component';

describe('CapitolHillComponent', () => {
  let component: CapitolHillComponent;
  let fixture: ComponentFixture<CapitolHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitolHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitolHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
