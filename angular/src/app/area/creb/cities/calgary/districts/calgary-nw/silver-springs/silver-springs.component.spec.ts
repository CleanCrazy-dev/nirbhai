import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverSpringsComponent } from './silver-springs.component';

describe('SilverSpringsComponent', () => {
  let component: SilverSpringsComponent;
  let fixture: ComponentFixture<SilverSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
