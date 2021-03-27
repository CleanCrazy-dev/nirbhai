import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorburnComponent } from './thorburn.component';

describe('ThorburnComponent', () => {
  let component: ThorburnComponent;
  let fixture: ComponentFixture<ThorburnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThorburnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorburnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
