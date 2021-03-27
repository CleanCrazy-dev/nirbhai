import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontereyParkComponent } from './monterey-park.component';

describe('MontereyParkComponent', () => {
  let component: MontereyParkComponent;
  let fixture: ComponentFixture<MontereyParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontereyParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontereyParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
