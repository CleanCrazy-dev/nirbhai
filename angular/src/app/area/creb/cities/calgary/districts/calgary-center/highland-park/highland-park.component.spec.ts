import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlandParkComponent } from './highland-park.component';

describe('HighlandParkComponent', () => {
  let component: HighlandParkComponent;
  let fixture: ComponentFixture<HighlandParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlandParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlandParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
