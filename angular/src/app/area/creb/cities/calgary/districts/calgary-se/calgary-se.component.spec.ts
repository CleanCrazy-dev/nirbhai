import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgarySeComponent } from './calgary-se.component';

describe('CalgarySeComponent', () => {
  let component: CalgarySeComponent;
  let fixture: ComponentFixture<CalgarySeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgarySeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgarySeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
