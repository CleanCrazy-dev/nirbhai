import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontgomeryComponent } from './montgomery.component';

describe('MontgomeryComponent', () => {
  let component: MontgomeryComponent;
  let fixture: ComponentFixture<MontgomeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontgomeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontgomeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
