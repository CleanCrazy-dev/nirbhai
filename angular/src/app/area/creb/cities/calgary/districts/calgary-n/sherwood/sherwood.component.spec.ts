import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherwoodComponent } from './sherwood.component';

describe('SherwoodComponent', () => {
  let component: SherwoodComponent;
  let fixture: ComponentFixture<SherwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SherwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SherwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

