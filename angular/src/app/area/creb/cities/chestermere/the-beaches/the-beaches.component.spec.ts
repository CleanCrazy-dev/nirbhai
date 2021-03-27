import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBeachesComponent } from './the-beaches.component';

describe('TheBeachesComponent', () => {
  let component: TheBeachesComponent;
  let fixture: ComponentFixture<TheBeachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBeachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBeachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
