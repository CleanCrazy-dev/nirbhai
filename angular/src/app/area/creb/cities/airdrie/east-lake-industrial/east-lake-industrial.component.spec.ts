import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastLakeIndustrialComponent } from './east-lake-industrial.component';

describe('EastLakeIndustrialComponent', () => {
  let component: EastLakeIndustrialComponent;
  let fixture: ComponentFixture<EastLakeIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastLakeIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastLakeIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
