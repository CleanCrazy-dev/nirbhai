import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestSpringsComponent } from './west-springs.component';

describe('WestSpringsComponent', () => {
  let component: WestSpringsComponent;
  let fixture: ComponentFixture<WestSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
