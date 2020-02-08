import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWeddingComponent } from './form-wedding.component';

describe('FormWeddingComponent', () => {
  let component: FormWeddingComponent;
  let fixture: ComponentFixture<FormWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
