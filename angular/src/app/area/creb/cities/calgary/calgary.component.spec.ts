import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryComponent } from './calgary.component';

describe('CalgaryComponent', () => {
  let component: CalgaryComponent;
  let fixture: ComponentFixture<CalgaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
