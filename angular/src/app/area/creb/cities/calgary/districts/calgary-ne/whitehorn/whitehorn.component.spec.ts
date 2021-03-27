import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitehornComponent } from './whitehorn.component';

describe('WhitehornComponent', () => {
  let component: WhitehornComponent;
  let fixture: ComponentFixture<WhitehornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitehornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitehornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
