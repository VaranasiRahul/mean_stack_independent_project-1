import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha2Component } from './alpha2.component';

describe('Alpha2Component', () => {
  let component: Alpha2Component;
  let fixture: ComponentFixture<Alpha2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
