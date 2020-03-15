import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPartyComponent } from './info-party.component';

describe('InfoPartyComponent', () => {
  let component: InfoPartyComponent;
  let fixture: ComponentFixture<InfoPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
