import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranklinComponent } from './franklin.component';

describe('FranklinComponent', () => {
  let component: FranklinComponent;
  let fixture: ComponentFixture<FranklinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranklinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranklinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
