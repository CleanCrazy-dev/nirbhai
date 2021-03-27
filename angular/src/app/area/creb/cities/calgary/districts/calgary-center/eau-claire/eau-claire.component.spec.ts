import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EauClaireComponent } from './eau-claire.component';

describe('EauClaireComponent', () => {
  let component: EauClaireComponent;
  let fixture: ComponentFixture<EauClaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EauClaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EauClaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
