import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningsideComponent } from './morningside.component';

describe('MorningsideComponent', () => {
  let component: MorningsideComponent;
  let fixture: ComponentFixture<MorningsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorningsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
