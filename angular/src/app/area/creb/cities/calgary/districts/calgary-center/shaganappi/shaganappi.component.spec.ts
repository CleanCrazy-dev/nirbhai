import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaganappiComponent } from './shaganappi.component';

describe('ShaganappiComponent', () => {
  let component: ShaganappiComponent;
  let fixture: ComponentFixture<ShaganappiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaganappiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaganappiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
