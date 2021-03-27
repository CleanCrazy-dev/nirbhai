import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsayComponent } from './ramsay.component';

describe('RamsayComponent', () => {
  let component: RamsayComponent;
  let fixture: ComponentFixture<RamsayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamsayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamsayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
