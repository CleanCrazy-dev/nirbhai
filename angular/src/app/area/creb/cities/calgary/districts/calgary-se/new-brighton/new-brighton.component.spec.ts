import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrightonComponent } from './new-brighton.component';

describe('NewBrightonComponent', () => {
  let component: NewBrightonComponent;
  let fixture: ComponentFixture<NewBrightonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBrightonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrightonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

