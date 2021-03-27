import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestHillhurstComponent } from './west-hillhurst.component';

describe('WestHillhurstComponent', () => {
  let component: WestHillhurstComponent;
  let fixture: ComponentFixture<WestHillhurstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestHillhurstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestHillhurstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
