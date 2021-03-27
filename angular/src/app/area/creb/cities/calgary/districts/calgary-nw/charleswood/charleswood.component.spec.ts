import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharleswoodComponent } from './charleswood.component';

describe('CharleswoodComponent', () => {
  let component: CharleswoodComponent;
  let fixture: ComponentFixture<CharleswoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharleswoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharleswoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
