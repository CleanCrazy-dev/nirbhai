import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvergreenComponent } from './evergreen.component';

describe('EvergreenComponent', () => {
  let component: EvergreenComponent;
  let fixture: ComponentFixture<EvergreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvergreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvergreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

