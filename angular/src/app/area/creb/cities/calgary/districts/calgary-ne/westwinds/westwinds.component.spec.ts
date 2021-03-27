import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestwindsComponent } from './westwinds.component';

describe('WestwindsComponent', () => {
  let component: WestwindsComponent;
  let fixture: ComponentFixture<WestwindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestwindsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestwindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
