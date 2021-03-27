import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadowbrookComponent } from './meadowbrook.component';

describe('MeadowbrookComponent', () => {
  let component: MeadowbrookComponent;
  let fixture: ComponentFixture<MeadowbrookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeadowbrookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadowbrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
