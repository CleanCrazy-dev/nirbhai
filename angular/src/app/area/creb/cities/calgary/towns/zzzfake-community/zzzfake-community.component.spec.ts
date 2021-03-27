import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZZZFakeCommunityComponent } from './zzzfake-community.component';

describe('ZZZFakeCommunityComponent', () => {
  let component: ZZZFakeCommunityComponent;
  let fixture: ComponentFixture<ZZZFakeCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZZZFakeCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZZZFakeCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
