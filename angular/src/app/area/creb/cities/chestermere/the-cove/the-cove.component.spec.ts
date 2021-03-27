import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCoveComponent } from './the-cove.component';

describe('TheCoveComponent', () => {
  let component: TheCoveComponent;
  let fixture: ComponentFixture<TheCoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
