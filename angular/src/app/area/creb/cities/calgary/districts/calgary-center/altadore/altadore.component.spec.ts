import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltadoreComponent } from './altadore.component';

describe('AltadoreComponent', () => {
  let component: AltadoreComponent;
  let fixture: ComponentFixture<AltadoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltadoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltadoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
