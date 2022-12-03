import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha51Component } from './alpha51.component';

describe('Alpha51Component', () => {
  let component: Alpha51Component;
  let fixture: ComponentFixture<Alpha51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
