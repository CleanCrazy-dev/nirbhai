import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorkvilleComponent } from './yorkville.component';

describe('YorkvilleComponent', () => {
  let component: YorkvilleComponent;
  let fixture: ComponentFixture<YorkvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YorkvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YorkvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
