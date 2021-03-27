import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverbendComponent } from './riverbend.component';

describe('RiverbendComponent', () => {
  let component: RiverbendComponent;
  let fixture: ComponentFixture<RiverbendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverbendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverbendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

