import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthFoothillsComponent } from './south-foothills.component';

describe('SouthFoothillsComponent', () => {
  let component: SouthFoothillsComponent;
  let fixture: ComponentFixture<SouthFoothillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthFoothillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthFoothillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

