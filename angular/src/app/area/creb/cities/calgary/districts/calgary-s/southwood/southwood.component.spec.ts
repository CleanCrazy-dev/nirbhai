import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthwoodComponent } from './southwood.component';

describe('SouthwoodComponent', () => {
  let component: SouthwoodComponent;
  let fixture: ComponentFixture<SouthwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
