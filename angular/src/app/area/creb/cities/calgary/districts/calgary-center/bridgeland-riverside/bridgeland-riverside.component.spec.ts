import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgelandRiversideComponent } from './bridgeland-riverside.component';

describe('BridgelandRiversideComponent', () => {
  let component: BridgelandRiversideComponent;
  let fixture: ComponentFixture<BridgelandRiversideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgelandRiversideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgelandRiversideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
