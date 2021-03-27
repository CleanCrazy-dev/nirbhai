import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastChestermereComponent } from './east-chestermere.component';

describe('EastChestermereComponent', () => {
  let component: EastChestermereComponent;
  let fixture: ComponentFixture<EastChestermereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastChestermereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastChestermereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
