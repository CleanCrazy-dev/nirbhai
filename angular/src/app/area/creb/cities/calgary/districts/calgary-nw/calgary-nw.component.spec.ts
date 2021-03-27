import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryNwComponent } from './calgary-nw.component';

describe('CalgaryNwComponent', () => {
  let component: CalgaryNwComponent;
  let fixture: ComponentFixture<CalgaryNwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryNwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryNwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
