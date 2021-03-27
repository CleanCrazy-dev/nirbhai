import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunaltaComponent } from './sunalta.component';

describe('SunaltaComponent', () => {
  let component: SunaltaComponent;
  let fixture: ComponentFixture<SunaltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunaltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
