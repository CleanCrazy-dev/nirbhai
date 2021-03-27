import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagewoodComponent } from './sagewood.component';

describe('SagewoodComponent', () => {
  let component: SagewoodComponent;
  let fixture: ComponentFixture<SagewoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagewoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagewoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
