import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfWillowComponent } from './wolf-willow.component';

describe('WolfWillowComponent', () => {
  let component: WolfWillowComponent;
  let fixture: ComponentFixture<WolfWillowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolfWillowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfWillowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
