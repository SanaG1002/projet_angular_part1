import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestionForfaitComponent } from './form-gestion-forfait.component';

describe('FormGestionForfaitComponent', () => {
  let component: FormGestionForfaitComponent;
  let fixture: ComponentFixture<FormGestionForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGestionForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGestionForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
