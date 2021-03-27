import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandstoneValleyComponent } from './sandstone-valley.component';

describe('SandstoneValleyComponent', () => {
  let component: SandstoneValleyComponent;
  let fixture: ComponentFixture<SandstoneValleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandstoneValleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandstoneValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

