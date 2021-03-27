import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestgateComponent } from './westgate.component';

describe('WestgateComponent', () => {
  let component: WestgateComponent;
  let fixture: ComponentFixture<WestgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
