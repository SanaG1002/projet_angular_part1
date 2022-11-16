import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitForfaitComponent } from './petit-forfait.component';

describe('PetitForfaitComponent', () => {
  let component: PetitForfaitComponent;
  let fixture: ComponentFixture<PetitForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
