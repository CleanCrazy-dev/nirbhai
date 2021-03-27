import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinstonHeightsMountviewComponent } from './winston-heights-mountview.component';

describe('WinstonHeightsMountviewComponent', () => {
  let component: WinstonHeightsMountviewComponent;
  let fixture: ComponentFixture<WinstonHeightsMountviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinstonHeightsMountviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinstonHeightsMountviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
