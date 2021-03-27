import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialsNavBarComponent } from './commercials-nav-bar.component';

describe('CommercialsNavBarComponent', () => {
  let component: CommercialsNavBarComponent;
  let fixture: ComponentFixture<CommercialsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
