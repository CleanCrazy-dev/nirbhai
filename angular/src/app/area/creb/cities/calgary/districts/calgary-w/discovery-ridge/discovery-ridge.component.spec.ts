import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryRidgeComponent } from './discovery-ridge.component';

describe('DiscoveryRidgeComponent', () => {
  let component: DiscoveryRidgeComponent;
  let fixture: ComponentFixture<DiscoveryRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});