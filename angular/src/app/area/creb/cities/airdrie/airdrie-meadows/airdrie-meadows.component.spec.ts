import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdrieMeadowsComponent } from './airdrie-meadows.component';

describe('AirdrieMeadowsComponent', () => {
  let component: AirdrieMeadowsComponent;
  let fixture: ComponentFixture<AirdrieMeadowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdrieMeadowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdrieMeadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
