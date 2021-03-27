import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomersetComponent } from './somerset.component';

describe('SomersetComponent', () => {
  let component: SomersetComponent;
  let fixture: ComponentFixture<SomersetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomersetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomersetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
