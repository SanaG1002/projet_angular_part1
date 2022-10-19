import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForfaitComponent } from './liste-forfait.component';

describe('ListeForfaitComponent', () => {
  let component: ListeForfaitComponent;
  let fixture: ComponentFixture<ListeForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
