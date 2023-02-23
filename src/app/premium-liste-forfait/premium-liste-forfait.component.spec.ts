import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumListeForfaitComponent } from './premium-liste-forfait.component';

describe('premiumListeForfaitComponent', () => {
  let component: PremiumListeForfaitComponent;
  let fixture: ComponentFixture<PremiumListeForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumListeForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumListeForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
