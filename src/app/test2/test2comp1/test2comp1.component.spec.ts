import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2comp1Component } from './test2comp1.component';

describe('Test2comp1Component', () => {
  let component: Test2comp1Component;
  let fixture: ComponentFixture<Test2comp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2comp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test2comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
