import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstsPage } from './firsts.page';

describe('FirstsPage', () => {
  let component: FirstsPage;
  let fixture: ComponentFixture<FirstsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
