import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgarySwComponent } from './calgary-sw.component';

describe('CalgarySwComponent', () => {
  let component: CalgarySwComponent;
  let fixture: ComponentFixture<CalgarySwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgarySwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgarySwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
