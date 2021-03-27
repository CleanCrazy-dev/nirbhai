import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityscapeComponent } from './cityscape.component';

describe('CityscapeComponent', () => {
  let component: CityscapeComponent;
  let fixture: ComponentFixture<CityscapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityscapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
