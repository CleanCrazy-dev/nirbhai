import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RundleComponent } from './rundle.component';

describe('RundleComponent', () => {
  let component: RundleComponent;
  let fixture: ComponentFixture<RundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RundleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
