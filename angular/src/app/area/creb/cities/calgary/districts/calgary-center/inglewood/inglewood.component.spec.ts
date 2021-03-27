import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InglewoodComponent } from './inglewood.component';

describe('InglewoodComponent', () => {
  let component: InglewoodComponent;
  let fixture: ComponentFixture<InglewoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InglewoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InglewoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
