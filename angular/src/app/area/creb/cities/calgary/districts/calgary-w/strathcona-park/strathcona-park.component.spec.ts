import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrathconaParkComponent } from './strathcona-park.component';

describe('StrathconaParkComponent', () => {
  let component: StrathconaParkComponent;
  let fixture: ComponentFixture<StrathconaParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrathconaParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrathconaParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
