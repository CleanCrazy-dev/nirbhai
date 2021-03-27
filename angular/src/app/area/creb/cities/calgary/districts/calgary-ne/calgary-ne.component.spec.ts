import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryNeComponent } from './calgary-ne.component';

describe('CalgaryNeComponent', () => {
  let component: CalgaryNeComponent;
  let fixture: ComponentFixture<CalgaryNeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryNeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryNeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
