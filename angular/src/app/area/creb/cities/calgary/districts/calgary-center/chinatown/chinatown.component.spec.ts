import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinatownComponent } from './chinatown.component';

describe('ChinatownComponent', () => {
  let component: ChinatownComponent;
  let fixture: ComponentFixture<ChinatownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinatownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinatownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
