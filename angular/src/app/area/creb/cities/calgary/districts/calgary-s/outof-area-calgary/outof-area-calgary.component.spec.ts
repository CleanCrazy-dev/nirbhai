import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutofAreaCalgaryComponent } from './outof-area-calgary.component';

describe('OutofAreaCalgaryComponent', () => {
  let component: OutofAreaCalgaryComponent;
  let fixture: ComponentFixture<OutofAreaCalgaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutofAreaCalgaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofAreaCalgaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
