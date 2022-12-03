import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alpha5Component } from './alpha5.component';

describe('Alpha5Component', () => {
  let component: Alpha5Component;
  let fixture: ComponentFixture<Alpha5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alpha5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alpha5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
