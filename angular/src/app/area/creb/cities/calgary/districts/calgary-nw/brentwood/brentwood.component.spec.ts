import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrentwoodComponent } from './brentwood.component';

describe('BrentwoodComponent', () => {
  let component: BrentwoodComponent;
  let fixture: ComponentFixture<BrentwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrentwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrentwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
