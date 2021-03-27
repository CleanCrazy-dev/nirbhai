import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaHillsComponent } from './panorama-hills.component';

describe('PanoramaHillsComponent', () => {
  let component: PanoramaHillsComponent;
  let fixture: ComponentFixture<PanoramaHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoramaHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

