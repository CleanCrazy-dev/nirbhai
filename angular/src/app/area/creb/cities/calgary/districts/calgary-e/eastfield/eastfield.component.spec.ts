import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastfieldComponent } from './eastfield.component';

describe('EastfieldComponent', () => {
  let component: EastfieldComponent;
  let fixture: ComponentFixture<EastfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});