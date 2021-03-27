import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthviewComponent } from './southview.component';

describe('SouthviewComponent', () => {
  let component: SouthviewComponent;
  let fixture: ComponentFixture<SouthviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

