import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliffBungalowComponent } from './cliff-bungalow.component';

describe('CliffBungalowComponent', () => {
  let component: CliffBungalowComponent;
  let fixture: ComponentFixture<CliffBungalowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliffBungalowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliffBungalowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
