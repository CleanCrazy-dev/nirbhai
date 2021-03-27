import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollingwoodComponent } from './collingwood.component';

describe('CollingwoodComponent', () => {
  let component: CollingwoodComponent;
  let fixture: ComponentFixture<CollingwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollingwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollingwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
