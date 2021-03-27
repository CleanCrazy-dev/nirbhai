import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestmereComponent } from './westmere.component';

describe('WestmereComponent', () => {
  let component: WestmereComponent;
  let fixture: ComponentFixture<WestmereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestmereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestmereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
