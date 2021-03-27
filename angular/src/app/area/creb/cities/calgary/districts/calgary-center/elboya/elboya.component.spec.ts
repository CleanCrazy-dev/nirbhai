import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElboyaComponent } from './elboya.component';

describe('ElboyaComponent', () => {
  let component: ElboyaComponent;
  let fixture: ComponentFixture<ElboyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElboyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElboyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
