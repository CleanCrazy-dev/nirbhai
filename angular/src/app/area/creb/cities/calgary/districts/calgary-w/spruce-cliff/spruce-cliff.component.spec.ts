import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpruceCliffComponent } from './spruce-cliff.component';

describe('SpruceCliffComponent', () => {
  let component: SpruceCliffComponent;
  let fixture: ComponentFixture<SpruceCliffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpruceCliffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpruceCliffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
