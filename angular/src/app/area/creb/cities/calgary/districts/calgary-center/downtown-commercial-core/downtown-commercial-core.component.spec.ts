import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntownCommercialCoreComponent } from './downtown-commercial-core.component';

describe('DowntownCommercialCoreComponent', () => {
  let component: DowntownCommercialCoreComponent;
  let fixture: ComponentFixture<DowntownCommercialCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowntownCommercialCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntownCommercialCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
