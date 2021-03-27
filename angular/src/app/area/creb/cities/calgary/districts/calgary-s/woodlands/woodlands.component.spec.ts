import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodlandsComponent } from './woodlands.component';

describe('WoodlandsComponent', () => {
  let component: WoodlandsComponent;
  let fixture: ComponentFixture<WoodlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodlandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
