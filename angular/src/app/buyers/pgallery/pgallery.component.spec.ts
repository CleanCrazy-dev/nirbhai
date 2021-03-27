import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgalleryComponent } from './pgallery.component';

describe('PgalleryComponent', () => {
  let component: PgalleryComponent;
  let fixture: ComponentFixture<PgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
