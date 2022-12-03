import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha3Component } from './alpha3.component';

describe('Alpha3Component', () => {
  let component: Alpha3Component;
  let fixture: ComponentFixture<Alpha3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
