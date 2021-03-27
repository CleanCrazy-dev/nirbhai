import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltlineComponent } from './beltline.component';

describe('BeltlineComponent', () => {
  let component: BeltlineComponent;
  let fixture: ComponentFixture<BeltlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeltlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
