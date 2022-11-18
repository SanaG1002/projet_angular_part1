import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementPropsComponent } from './etablissement-props.component';

describe('EtablissementPropsComponent', () => {
  let component: EtablissementPropsComponent;
  let fixture: ComponentFixture<EtablissementPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtablissementPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissementPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
