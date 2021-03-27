import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountPleasantComponent } from './mount-pleasant.component';

describe('MountPleasantComponent', () => {
  let component: MountPleasantComponent;
  let fixture: ComponentFixture<MountPleasantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountPleasantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountPleasantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
