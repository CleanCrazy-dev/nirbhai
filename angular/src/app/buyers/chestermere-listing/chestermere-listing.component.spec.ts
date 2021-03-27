import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestermereListingComponent } from './chestermere-listing.component';

describe('ChestermereListingComponent', () => {
  let component: ChestermereListingComponent;
  let fixture: ComponentFixture<ChestermereListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChestermereListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestermereListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
