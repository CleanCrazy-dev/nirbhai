import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeridianComponent } from './meridian.component';

describe('MeridianComponent', () => {
  let component: MeridianComponent;
  let fixture: ComponentFixture<MeridianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeridianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeridianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
