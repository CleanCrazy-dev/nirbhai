import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddleridgeIndustrialComponent } from './saddleridge-industrial.component';

describe('SaddleridgeIndustrialComponent', () => {
  let component: SaddleridgeIndustrialComponent;
  let fixture: ComponentFixture<SaddleridgeIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaddleridgeIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaddleridgeIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
