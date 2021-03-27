import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenwoodGreenbriarComponent } from './greenwood-greenbriar.component';

describe('GreenwoodGreenbriarComponent', () => {
  let component: GreenwoodGreenbriarComponent;
  let fixture: ComponentFixture<GreenwoodGreenbriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenwoodGreenbriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenwoodGreenbriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
