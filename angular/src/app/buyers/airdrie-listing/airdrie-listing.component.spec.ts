import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdrieListingComponent } from './airdrie-listing.component';

describe('AirdrieListingComponent', () => {
  let component: AirdrieListingComponent;
  let fixture: ComponentFixture<AirdrieListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdrieListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdrieListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
