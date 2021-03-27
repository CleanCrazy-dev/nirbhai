import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntownWestEndComponent } from './downtown-west-end.component';

describe('DowntownWestEndComponent', () => {
  let component: DowntownWestEndComponent;
  let fixture: ComponentFixture<DowntownWestEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowntownWestEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntownWestEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
