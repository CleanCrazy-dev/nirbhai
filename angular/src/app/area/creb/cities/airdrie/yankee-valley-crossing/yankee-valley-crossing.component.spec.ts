import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YankeeValleyCrossingComponent } from './yankee-valley-crossing.component';

describe('YankeeValleyCrossingComponent', () => {
  let component: YankeeValleyCrossingComponent;
  let fixture: ComponentFixture<YankeeValleyCrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YankeeValleyCrossingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YankeeValleyCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
