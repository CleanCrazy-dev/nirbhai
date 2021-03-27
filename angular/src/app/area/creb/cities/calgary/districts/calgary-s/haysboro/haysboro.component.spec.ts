import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaysboroComponent } from './haysboro.component';

describe('HaysboroComponent', () => {
  let component: HaysboroComponent;
  let fixture: ComponentFixture<HaysboroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaysboroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaysboroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

