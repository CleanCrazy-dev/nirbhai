import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgewaterComponent } from './edgewater.component';

describe('EdgewaterComponent', () => {
  let component: EdgewaterComponent;
  let fixture: ComponentFixture<EdgewaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgewaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgewaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
