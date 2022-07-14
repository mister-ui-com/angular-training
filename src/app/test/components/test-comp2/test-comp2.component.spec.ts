import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComp2Component } from './test-comp2.component';

describe('TestComp2Component', () => {
  let component: TestComp2Component;
  let fixture: ComponentFixture<TestComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
