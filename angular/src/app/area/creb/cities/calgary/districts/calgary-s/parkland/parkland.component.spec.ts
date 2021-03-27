import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParklandComponent } from './parkland.component';

describe('ParklandComponent', () => {
  let component: ParklandComponent;
  let fixture: ComponentFixture<ParklandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParklandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParklandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
