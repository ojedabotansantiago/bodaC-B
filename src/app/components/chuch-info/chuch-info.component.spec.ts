import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuchInfoComponent } from './chuch-info.component';

describe('ChuchInfoComponent', () => {
  let component: ChuchInfoComponent;
  let fixture: ComponentFixture<ChuchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
