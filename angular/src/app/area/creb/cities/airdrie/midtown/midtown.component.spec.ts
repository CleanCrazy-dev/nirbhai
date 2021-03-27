import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtownComponent } from './midtown.component';

describe('MidtownComponent', () => {
  let component: MidtownComponent;
  let fixture: ComponentFixture<MidtownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidtownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidtownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
