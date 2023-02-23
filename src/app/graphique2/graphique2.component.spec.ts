import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphique2Component } from './graphique2.component';

describe('Graphique2Component', () => {
  let component: Graphique2Component;
  let fixture: ComponentFixture<Graphique2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphique2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphique2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
