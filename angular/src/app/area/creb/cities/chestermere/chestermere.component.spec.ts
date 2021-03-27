import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestermereComponent } from './chestermere.component';

describe('ChestermereComponent', () => {
  let component: ChestermereComponent;
  let fixture: ComponentFixture<ChestermereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChestermereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestermereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
