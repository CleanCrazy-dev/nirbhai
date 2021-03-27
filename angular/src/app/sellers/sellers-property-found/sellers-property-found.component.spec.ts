import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersPropertyFoundComponent } from './sellers-property-found.component';

describe('SellersPropertyFoundComponent', () => {
  let component: SellersPropertyFoundComponent;
  let fixture: ComponentFixture<SellersPropertyFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersPropertyFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersPropertyFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
