import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthCalgaryComponent } from './south-calgary.component';

describe('SouthCalgaryComponent', () => {
  let component: SouthCalgaryComponent;
  let fixture: ComponentFixture<SouthCalgaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthCalgaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthCalgaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
