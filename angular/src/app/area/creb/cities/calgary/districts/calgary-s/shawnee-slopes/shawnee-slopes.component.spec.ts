import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawneeSlopesComponent } from './shawnee-slopes.component';

describe('ShawneeSlopesComponent', () => {
  let component: ShawneeSlopesComponent;
  let fixture: ComponentFixture<ShawneeSlopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShawneeSlopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShawneeSlopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
