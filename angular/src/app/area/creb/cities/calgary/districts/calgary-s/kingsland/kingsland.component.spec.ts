import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingslandComponent } from './kingsland.component';

describe('KingslandComponent', () => {
  let component: KingslandComponent;
  let fixture: ComponentFixture<KingslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingslandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

