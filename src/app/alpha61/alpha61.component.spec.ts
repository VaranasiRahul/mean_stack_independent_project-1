import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha61Component } from './alpha61.component';

describe('Alpha61Component', () => {
  let component: Alpha61Component;
  let fixture: ComponentFixture<Alpha61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
