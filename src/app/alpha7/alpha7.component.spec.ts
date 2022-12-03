import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha7Component } from './alpha7.component';

describe('Alpha7Component', () => {
  let component: Alpha7Component;
  let fixture: ComponentFixture<Alpha7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
