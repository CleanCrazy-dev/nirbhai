import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntownEastVillageComponent } from './downtown-east-village.component';

describe('DowntownEastVillageComponent', () => {
  let component: DowntownEastVillageComponent;
  let fixture: ComponentFixture<DowntownEastVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowntownEastVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntownEastVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
