import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JensenComponent } from './jensen.component';

describe('JensenComponent', () => {
  let component: JensenComponent;
  let fixture: ComponentFixture<JensenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JensenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JensenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
