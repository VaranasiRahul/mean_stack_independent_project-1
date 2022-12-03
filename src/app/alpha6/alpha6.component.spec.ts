import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha6Component } from './alpha6.component';

describe('Alpha6Component', () => {
  let component: Alpha6Component;
  let fixture: ComponentFixture<Alpha6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
