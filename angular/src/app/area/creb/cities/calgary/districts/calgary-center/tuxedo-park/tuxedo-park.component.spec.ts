import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxedoParkComponent } from './tuxedo-park.component';

describe('TuxedoParkComponent', () => {
  let component: TuxedoParkComponent;
  let fixture: ComponentFixture<TuxedoParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuxedoParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxedoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
