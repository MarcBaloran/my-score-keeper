import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossesionArrowRightComponent } from './possesion-arrow-right.component';

describe('PossesionArrowRightComponent', () => {
  let component: PossesionArrowRightComponent;
  let fixture: ComponentFixture<PossesionArrowRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossesionArrowRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossesionArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
