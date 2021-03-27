import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorncliffeComponent } from './thorncliffe.component';

describe('ThorncliffeComponent', () => {
  let component: ThorncliffeComponent;
  let fixture: ComponentFixture<ThorncliffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThorncliffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorncliffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

