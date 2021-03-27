import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighfieldComponent } from './highfield.component';

describe('HighfieldComponent', () => {
  let component: HighfieldComponent;
  let fixture: ComponentFixture<HighfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
