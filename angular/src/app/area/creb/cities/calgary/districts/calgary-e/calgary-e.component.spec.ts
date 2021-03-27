import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryEComponent } from './calgary-e.component';

describe('CalgaryEComponent', () => {
  let component: CalgaryEComponent;
  let fixture: ComponentFixture<CalgaryEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
