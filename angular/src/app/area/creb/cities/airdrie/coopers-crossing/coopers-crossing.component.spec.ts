import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopersCrossingComponent } from './coopers-crossing.component';

describe('CoopersCrossingComponent', () => {
  let component: CoopersCrossingComponent;
  let fixture: ComponentFixture<CoopersCrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoopersCrossingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoopersCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
