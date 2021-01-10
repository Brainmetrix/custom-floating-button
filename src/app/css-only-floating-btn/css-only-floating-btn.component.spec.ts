import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssOnlyFloatingBtnComponent } from './css-only-floating-btn.component';

describe('CssOnlyFloatingBtnComponent', () => {
  let component: CssOnlyFloatingBtnComponent;
  let fixture: ComponentFixture<CssOnlyFloatingBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssOnlyFloatingBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssOnlyFloatingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
