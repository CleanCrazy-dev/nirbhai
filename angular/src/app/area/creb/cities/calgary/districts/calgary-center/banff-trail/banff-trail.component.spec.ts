import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanffTrailComponent } from './banff-trail.component';

describe('BanffTrailComponent', () => {
  let component: BanffTrailComponent;
  let fixture: ComponentFixture<BanffTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanffTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanffTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
