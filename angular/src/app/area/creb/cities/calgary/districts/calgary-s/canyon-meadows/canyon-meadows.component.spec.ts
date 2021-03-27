import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanyonMeadowsComponent } from './canyon-meadows.component';

describe('CanyonMeadowsComponent', () => {
  let component: CanyonMeadowsComponent;
  let fixture: ComponentFixture<CanyonMeadowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanyonMeadowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanyonMeadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

