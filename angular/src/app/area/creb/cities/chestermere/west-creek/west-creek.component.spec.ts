import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestCreekComponent } from './west-creek.component';

describe('WestCreekComponent', () => {
  let component: WestCreekComponent;
  let fixture: ComponentFixture<WestCreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestCreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
