import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicAcresComponent } from './scenic-acres.component';

describe('ScenicAcresComponent', () => {
  let component: ScenicAcresComponent;
  let fixture: ComponentFixture<ScenicAcresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenicAcresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicAcresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
