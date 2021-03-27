import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraesideComponent } from './braeside.component';

describe('BraesideComponent', () => {
  let component: BraesideComponent;
  let fixture: ComponentFixture<BraesideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraesideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BraesideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

