import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleyfieldComponent } from './valleyfield.component';

describe('ValleyfieldComponent', () => {
  let component: ValleyfieldComponent;
  let fixture: ComponentFixture<ValleyfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleyfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValleyfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

