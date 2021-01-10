import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFloatingButtonComponent } from './custom-floating-button.component';

describe('CustomFloatingButtonComponent', () => {
  let component: CustomFloatingButtonComponent;
  let fixture: ComponentFixture<CustomFloatingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFloatingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
