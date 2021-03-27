import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarboroComponent } from './scarboro.component';

describe('ScarboroComponent', () => {
  let component: ScarboroComponent;
  let fixture: ComponentFixture<ScarboroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScarboroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScarboroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
