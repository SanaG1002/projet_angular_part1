import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvisComponent } from './form-avis.component';

describe('FormAvisComponent', () => {
  let component: FormAvisComponent;
  let fixture: ComponentFixture<FormAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
