import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrieBarracksComponent } from './currie-barracks.component';

describe('CurrieBarracksComponent', () => {
  let component: CurrieBarracksComponent;
  let fixture: ComponentFixture<CurrieBarracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrieBarracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrieBarracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});