import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincolnParkComponent } from './lincoln-park.component';

describe('LincolnParkComponent', () => {
  let component: LincolnParkComponent;
  let fixture: ComponentFixture<LincolnParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincolnParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LincolnParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
