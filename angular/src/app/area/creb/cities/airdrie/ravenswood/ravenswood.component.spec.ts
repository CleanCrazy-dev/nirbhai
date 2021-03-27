import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenswoodComponent } from './ravenswood.component';

describe('RavenswoodComponent', () => {
  let component: RavenswoodComponent;
  let fixture: ComponentFixture<RavenswoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RavenswoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenswoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
