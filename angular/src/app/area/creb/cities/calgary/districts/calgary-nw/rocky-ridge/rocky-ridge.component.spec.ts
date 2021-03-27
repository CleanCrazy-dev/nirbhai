import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockyRidgeComponent } from './rocky-ridge.component';

describe('RockyRidgeComponent', () => {
  let component: RockyRidgeComponent;
  let fixture: ComponentFixture<RockyRidgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockyRidgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockyRidgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
