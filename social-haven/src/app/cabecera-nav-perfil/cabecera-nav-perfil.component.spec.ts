import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraNavPerfilComponent } from './cabecera-nav-perfil.component';

describe('CabeceraNavPerfilComponent', () => {
  let component: CabeceraNavPerfilComponent;
  let fixture: ComponentFixture<CabeceraNavPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraNavPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraNavPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
