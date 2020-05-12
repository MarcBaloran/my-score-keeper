import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoulsComponent } from './fouls.component';

describe('FoulsComponent', () => {
  let component: FoulsComponent;
  let fixture: ComponentFixture<FoulsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoulsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
