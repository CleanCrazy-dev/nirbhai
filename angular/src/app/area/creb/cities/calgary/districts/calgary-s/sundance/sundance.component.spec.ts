import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundanceComponent } from './sundance.component';

describe('SundanceComponent', () => {
  let component: SundanceComponent;
  let fixture: ComponentFixture<SundanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SundanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SundanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
