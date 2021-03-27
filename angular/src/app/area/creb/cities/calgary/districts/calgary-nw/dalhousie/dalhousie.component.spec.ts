import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalhousieComponent } from './dalhousie.component';

describe('DalhousieComponent', () => {
  let component: DalhousieComponent;
  let fixture: ComponentFixture<DalhousieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalhousieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalhousieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
