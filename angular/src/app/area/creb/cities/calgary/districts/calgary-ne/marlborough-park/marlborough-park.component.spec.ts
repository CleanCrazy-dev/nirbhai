import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarlboroughParkComponent } from './marlborough-park.component';

describe('MarlboroughParkComponent', () => {
  let component: MarlboroughParkComponent;
  let fixture: ComponentFixture<MarlboroughParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarlboroughParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarlboroughParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
