import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrairieSpringsComponent } from './prairie-springs.component';

describe('PrairieSpringsComponent', () => {
  let component: PrairieSpringsComponent;
  let fixture: ComponentFixture<PrairieSpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrairieSpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrairieSpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
