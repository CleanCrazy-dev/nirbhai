import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdrieComponent } from './airdrie.component';

describe('AirdrieComponent', () => {
  let component: AirdrieComponent;
  let fixture: ComponentFixture<AirdrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
