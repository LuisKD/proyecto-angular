import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloMisHistorietasComponent } from './solo-mis-historietas.component';

describe('SoloMisHistorietasComponent', () => {
  let component: SoloMisHistorietasComponent;
  let fixture: ComponentFixture<SoloMisHistorietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloMisHistorietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloMisHistorietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
