import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlythBonnybrookComponent } from './alyth-bonnybrook.component';

describe('AlythBonnybrookComponent', () => {
  let component: AlythBonnybrookComponent;
  let fixture: ComponentFixture<AlythBonnybrookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlythBonnybrookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlythBonnybrookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
