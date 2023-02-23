import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForfaitDerniereChanceComponent } from './page-forfait-derniere-chance.component';

describe('PageForfaitDerniereChanceComponent', () => {
  let component: PageForfaitDerniereChanceComponent;
  let fixture: ComponentFixture<PageForfaitDerniereChanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageForfaitDerniereChanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageForfaitDerniereChanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
