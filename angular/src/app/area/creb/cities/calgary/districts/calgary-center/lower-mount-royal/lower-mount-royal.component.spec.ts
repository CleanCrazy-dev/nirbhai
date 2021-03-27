import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerMountRoyalComponent } from './lower-mount-royal.component';

describe('LowerMountRoyalComponent', () => {
  let component: LowerMountRoyalComponent;
  let fixture: ComponentFixture<LowerMountRoyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerMountRoyalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerMountRoyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
