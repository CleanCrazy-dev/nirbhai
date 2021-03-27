import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliserComponent } from './palliser.component';

describe('PalliserComponent', () => {
  let component: PalliserComponent;
  let fixture: ComponentFixture<PalliserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalliserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
