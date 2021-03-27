import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryNComponent } from './calgary-n.component';

describe('CalgaryNComponent', () => {
  let component: CalgaryNComponent;
  let fixture: ComponentFixture<CalgaryNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
