import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildwoodComponent } from './wildwood.component';

describe('WildwoodComponent', () => {
  let component: WildwoodComponent;
  let fixture: ComponentFixture<WildwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
