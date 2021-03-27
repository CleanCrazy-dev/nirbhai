import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyviewRanchComponent } from './skyview-ranch.component';

describe('SkyviewRanchComponent', () => {
  let component: SkyviewRanchComponent;
  let fixture: ComponentFixture<SkyviewRanchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyviewRanchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyviewRanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
