import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HounsfieldHeightsBriarHillComponent } from './hounsfield-heights-briar-hill.component';

describe('HounsfieldHeightsBriarHillComponent', () => {
  let component: HounsfieldHeightsBriarHillComponent;
  let fixture: ComponentFixture<HounsfieldHeightsBriarHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HounsfieldHeightsBriarHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HounsfieldHeightsBriarHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
