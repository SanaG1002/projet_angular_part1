import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreniumListeForfaitComponent } from './prenium-liste-forfait.component';

describe('PreniumListeForfaitComponent', () => {
  let component: PreniumListeForfaitComponent;
  let fixture: ComponentFixture<PreniumListeForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreniumListeForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreniumListeForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
