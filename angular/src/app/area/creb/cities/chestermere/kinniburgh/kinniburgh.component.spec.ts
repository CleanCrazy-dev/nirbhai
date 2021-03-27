import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinniburghComponent } from './kinniburgh.component';

describe('KinniburghComponent', () => {
  let component: KinniburghComponent;
  let fixture: ComponentFixture<KinniburghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinniburghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinniburghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
