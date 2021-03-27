import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunridgeComponent } from './sunridge.component';

describe('SunridgeComponent', () => {
  let component: SunridgeComponent;
  let fixture: ComponentFixture<SunridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
