import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthHavenUpperComponent } from './north-haven-upper.component';

describe('NorthHavenUpperComponent', () => {
  let component: NorthHavenUpperComponent;
  let fixture: ComponentFixture<NorthHavenUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthHavenUpperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthHavenUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

