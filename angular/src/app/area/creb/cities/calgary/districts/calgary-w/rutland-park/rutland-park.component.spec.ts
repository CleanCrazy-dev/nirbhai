import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutlandParkComponent } from './rutland-park.component';

describe('RutlandParkComponent', () => {
  let component: RutlandParkComponent;
  let fixture: ComponentFixture<RutlandParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutlandParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutlandParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
