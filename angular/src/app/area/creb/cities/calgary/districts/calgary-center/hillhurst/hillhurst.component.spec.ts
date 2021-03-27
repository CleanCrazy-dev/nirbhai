import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillhurstComponent } from './hillhurst.component';

describe('HillhurstComponent', () => {
  let component: HillhurstComponent;
  let fixture: ComponentFixture<HillhurstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillhurstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillhurstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
