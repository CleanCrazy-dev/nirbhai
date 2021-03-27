import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVillageComponent } from './the-village.component';

describe('TheVillageComponent', () => {
  let component: TheVillageComponent;
  let fixture: ComponentFixture<TheVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
