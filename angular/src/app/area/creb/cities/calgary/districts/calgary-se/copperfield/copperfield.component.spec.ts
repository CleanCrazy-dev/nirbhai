import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperfieldComponent } from './copperfield.component';

describe('CopperfieldComponent', () => {
  let component: CopperfieldComponent;
  let fixture: ComponentFixture<CopperfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopperfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

