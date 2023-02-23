import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphique1Component } from './graphique1.component';

describe('Graphique1Component', () => {
  let component: Graphique1Component;
  let fixture: ComponentFixture<Graphique1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphique1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphique1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
