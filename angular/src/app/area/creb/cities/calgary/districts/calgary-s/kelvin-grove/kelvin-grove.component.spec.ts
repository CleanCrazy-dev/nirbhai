import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinGroveComponent } from './kelvin-grove.component';

describe('KelvinGroveComponent', () => {
  let component: KelvinGroveComponent;
  let fixture: ComponentFixture<KelvinGroveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelvinGroveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinGroveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

