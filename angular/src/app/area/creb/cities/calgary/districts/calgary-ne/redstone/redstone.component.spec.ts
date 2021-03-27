import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedstoneComponent } from './redstone.component';

describe('RedstoneComponent', () => {
  let component: RedstoneComponent;
  let fixture: ComponentFixture<RedstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedstoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
