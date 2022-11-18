import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisPropsComponent } from './avis-props.component';

describe('AvisPropsComponent', () => {
  let component: AvisPropsComponent;
  let fixture: ComponentFixture<AvisPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
