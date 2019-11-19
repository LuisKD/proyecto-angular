import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorietasListComponent } from './historietas-list.component';

describe('HistorietasListComponent', () => {
  let component: HistorietasListComponent;
  let fixture: ComponentFixture<HistorietasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorietasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorietasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
