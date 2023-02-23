import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForfaitVoyageComponent } from './page-forfait-voyage.component';

describe('PageForfaitVoyageComponent', () => {
  let component: PageForfaitVoyageComponent;
  let fixture: ComponentFixture<PageForfaitVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageForfaitVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageForfaitVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
