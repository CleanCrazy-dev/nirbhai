import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaysideComponent } from './bayside.component';

describe('BaysideComponent', () => {
  let component: BaysideComponent;
  let fixture: ComponentFixture<BaysideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaysideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
