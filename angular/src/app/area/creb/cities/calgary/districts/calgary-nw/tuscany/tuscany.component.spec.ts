import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuscanyComponent } from './tuscany.component';

describe('TuscanyComponent', () => {
  let component: TuscanyComponent;
  let fixture: ComponentFixture<TuscanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuscanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuscanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
