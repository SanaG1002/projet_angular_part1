import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonneesPropsComponent } from './coordonnees-props.component';

describe('CoordonneesPropsComponent', () => {
  let component: CoordonneesPropsComponent;
  let fixture: ComponentFixture<CoordonneesPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordonneesPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordonneesPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
