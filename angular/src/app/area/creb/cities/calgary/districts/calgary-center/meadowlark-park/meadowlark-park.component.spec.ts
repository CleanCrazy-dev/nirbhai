import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadowlarkParkComponent } from './meadowlark-park.component';

describe('MeadowlarkParkComponent', () => {
  let component: MeadowlarkParkComponent;
  let fixture: ComponentFixture<MeadowlarkParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeadowlarkParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadowlarkParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
