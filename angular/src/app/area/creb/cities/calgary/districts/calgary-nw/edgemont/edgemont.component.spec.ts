import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgemontComponent } from './edgemont.component';

describe('EdgemontComponent', () => {
  let component: EdgemontComponent;
  let fixture: ComponentFixture<EdgemontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgemontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgemontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
