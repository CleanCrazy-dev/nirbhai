import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenslandComponent } from './queensland.component';

describe('QueenslandComponent', () => {
  let component: QueenslandComponent;
  let fixture: ComponentFixture<QueenslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueenslandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
