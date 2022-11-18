import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosForfaitComponent } from './infos-forfait.component';

describe('InfosForfaitComponent', () => {
  let component: InfosForfaitComponent;
  let fixture: ComponentFixture<InfosForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
