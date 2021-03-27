import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffaloRubComponent } from './buffalo-rub.component';

describe('BuffaloRubComponent', () => {
  let component: BuffaloRubComponent;
  let fixture: ComponentFixture<BuffaloRubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffaloRubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffaloRubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
