import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBinding } from './two-binding';

describe('TwoBinding', () => {
  let component: TwoBinding;
  let fixture: ComponentFixture<TwoBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
