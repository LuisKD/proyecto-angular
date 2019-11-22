import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNoColeguillaComponent } from './info-no-coleguilla.component';

describe('InfoNoColeguillaComponent', () => {
  let component: InfoNoColeguillaComponent;
  let fixture: ComponentFixture<InfoNoColeguillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNoColeguillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNoColeguillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
