import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodsideComponent } from './woodside.component';

describe('WoodsideComponent', () => {
  let component: WoodsideComponent;
  let fixture: ComponentFixture<WoodsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
