import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryListingComponent } from './calgary-listing.component';

describe('CalgaryListingComponent', () => {
  let component: CalgaryListingComponent;
  let fixture: ComponentFixture<CalgaryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalgaryListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
