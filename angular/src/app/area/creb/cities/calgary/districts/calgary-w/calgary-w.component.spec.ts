import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryWComponent } from './calgary-w.component';

describe('CalgaryWComponent', () => {
  let component: CalgaryWComponent;
  let fixture: ComponentFixture<CalgaryWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
