import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayfairComponent } from './mayfair.component';

describe('MayfairComponent', () => {
  let component: MayfairComponent;
  let fixture: ComponentFixture<MayfairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayfairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayfairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
