/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RumorComponent } from './rumor.component';

describe('RumorComponent', () => {
  let component: RumorComponent;
  let fixture: ComponentFixture<RumorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
