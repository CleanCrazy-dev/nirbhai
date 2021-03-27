import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleridgeComponent } from './castleridge.component';

describe('CastleridgeComponent', () => {
  let component: CastleridgeComponent;
  let fixture: ComponentFixture<CastleridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastleridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
