import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauForfaitsComponent } from './tableau-forfaits.component';

describe('TableauForfaitsComponent', () => {
  let component: TableauForfaitsComponent;
  let fixture: ComponentFixture<TableauForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauForfaitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

