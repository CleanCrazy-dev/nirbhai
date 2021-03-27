import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkylineWestComponent } from './skyline-west.component';

describe('SkylineWestComponent', () => {
  let component: SkylineWestComponent;
  let fixture: ComponentFixture<SkylineWestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkylineWestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkylineWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

