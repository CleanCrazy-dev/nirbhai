import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaparralComponent } from './chaparral.component';

describe('ChaparralComponent', () => {
  let component: ChaparralComponent;
  let fixture: ComponentFixture<ChaparralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaparralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaparralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

