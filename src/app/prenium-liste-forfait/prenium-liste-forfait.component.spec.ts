import { ComponentFixture, TestBed } from '@angular/core/testing';

import { premiumListeForfaitComponent } from './premium-liste-forfait.component';

describe('premiumListeForfaitComponent', () => {
  let component: premiumListeForfaitComponent;
  let fixture: ComponentFixture<premiumListeForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ premiumListeForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(premiumListeForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
