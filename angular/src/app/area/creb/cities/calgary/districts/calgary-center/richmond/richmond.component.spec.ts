import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichmondComponent } from './richmond.component';

describe('RichmondComponent', () => {
  let component: RichmondComponent;
  let fixture: ComponentFixture<RichmondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichmondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichmondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
