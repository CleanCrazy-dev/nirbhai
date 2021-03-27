import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BritanniaComponent } from './britannia.component';

describe('BritanniaComponent', () => {
  let component: BritanniaComponent;
  let fixture: ComponentFixture<BritanniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BritanniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BritanniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
