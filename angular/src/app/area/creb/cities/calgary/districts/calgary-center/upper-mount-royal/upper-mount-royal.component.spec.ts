import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperMountRoyalComponent } from './upper-mount-royal.component';

describe('UpperMountRoyalComponent', () => {
  let component: UpperMountRoyalComponent;
  let fixture: ComponentFixture<UpperMountRoyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperMountRoyalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperMountRoyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
