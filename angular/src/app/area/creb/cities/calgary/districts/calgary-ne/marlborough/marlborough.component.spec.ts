import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarlboroughComponent } from './marlborough.component';

describe('MarlboroughComponent', () => {
  let component: MarlboroughComponent;
  let fixture: ComponentFixture<MarlboroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarlboroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarlboroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
