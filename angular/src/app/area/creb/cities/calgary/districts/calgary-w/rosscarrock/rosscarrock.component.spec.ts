import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosscarrockComponent } from './rosscarrock.component';

describe('RosscarrockComponent', () => {
  let component: RosscarrockComponent;
  let fixture: ComponentFixture<RosscarrockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosscarrockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosscarrockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
