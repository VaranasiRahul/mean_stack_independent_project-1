import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha4Component } from './alpha4.component';

describe('Alpha4Component', () => {
  let component: Alpha4Component;
  let fixture: ComponentFixture<Alpha4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
