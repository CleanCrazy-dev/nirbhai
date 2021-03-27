import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoxboroComponent } from './roxboro.component';

describe('RoxboroComponent', () => {
  let component: RoxboroComponent;
  let fixture: ComponentFixture<RoxboroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoxboroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoxboroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
