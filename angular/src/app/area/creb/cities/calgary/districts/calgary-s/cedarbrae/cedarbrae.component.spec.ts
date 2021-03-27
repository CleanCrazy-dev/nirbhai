import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedarbraeComponent } from './cedarbrae.component';

describe('CedarbraeComponent', () => {
  let component: CedarbraeComponent;
  let fixture: ComponentFixture<CedarbraeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedarbraeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarbraeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

