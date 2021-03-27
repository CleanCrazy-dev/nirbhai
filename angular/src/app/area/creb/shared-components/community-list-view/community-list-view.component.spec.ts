import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityListViewComponent } from './community-list-view.component';

describe('CommunityListViewComponent', () => {
  let component: CommunityListViewComponent;
  let fixture: ComponentFixture<CommunityListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
