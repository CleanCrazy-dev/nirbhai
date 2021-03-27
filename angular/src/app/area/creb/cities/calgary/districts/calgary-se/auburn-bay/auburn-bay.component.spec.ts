import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuburnBayComponent } from './auburn-bay.component';

describe('AuburnBayComponent', () => {
  let component: AuburnBayComponent;
  let fixture: ComponentFixture<AuburnBayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuburnBayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuburnBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

