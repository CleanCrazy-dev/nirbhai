import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoothillsComponent } from './foothills.component';

describe('FoothillsComponent', () => {
  let component: FoothillsComponent;
  let fixture: ComponentFixture<FoothillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoothillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoothillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});