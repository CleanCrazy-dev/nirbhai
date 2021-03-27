import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadiaComponent } from './acadia.component';

describe('AcadiaComponent', () => {
  let component: AcadiaComponent;
  let fixture: ComponentFixture<AcadiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

