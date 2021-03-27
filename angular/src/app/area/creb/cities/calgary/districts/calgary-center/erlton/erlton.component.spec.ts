import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErltonComponent } from './erlton.component';

describe('ErltonComponent', () => {
  let component: ErltonComponent;
  let fixture: ComponentFixture<ErltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErltonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
