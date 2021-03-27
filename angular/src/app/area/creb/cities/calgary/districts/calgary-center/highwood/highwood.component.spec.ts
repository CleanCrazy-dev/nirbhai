import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighwoodComponent } from './highwood.component';

describe('HighwoodComponent', () => {
  let component: HighwoodComponent;
  let fixture: ComponentFixture<HighwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
