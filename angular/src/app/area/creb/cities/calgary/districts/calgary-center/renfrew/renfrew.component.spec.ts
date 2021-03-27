import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenfrewComponent } from './renfrew.component';

describe('RenfrewComponent', () => {
  let component: RenfrewComponent;
  let fixture: ComponentFixture<RenfrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenfrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenfrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
