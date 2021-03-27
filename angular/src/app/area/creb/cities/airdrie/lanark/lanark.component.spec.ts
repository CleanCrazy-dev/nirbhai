import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanarkComponent } from './lanark.component';

describe('LanarkComponent', () => {
  let component: LanarkComponent;
  let fixture: ComponentFixture<LanarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
