import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralSpringsComponent } from './coral-springs.component';

describe('CoralSpringsComponent', () => {
  let component: CoralSpringsComponent;
  let fixture: ComponentFixture<CoralSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoralSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoralSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
