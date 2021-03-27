import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaradaleComponent } from './taradale.component';

describe('TaradaleComponent', () => {
  let component: TaradaleComponent;
  let fixture: ComponentFixture<TaradaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaradaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaradaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
