import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridlewoodComponent } from './bridlewood.component';

describe('BridlewoodComponent', () => {
  let component: BridlewoodComponent;
  let fixture: ComponentFixture<BridlewoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridlewoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridlewoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

