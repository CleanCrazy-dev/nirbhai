import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthHavenComponent } from './north-haven.component';

describe('NorthHavenComponent', () => {
  let component: NorthHavenComponent;
  let fixture: ComponentFixture<NorthHavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthHavenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthHavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

