import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifrender } from './ifrender';

describe('Ifrender', () => {
  let component: Ifrender;
  let fixture: ComponentFixture<Ifrender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ifrender],
    }).compileComponents();

    fixture = TestBed.createComponent(Ifrender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
