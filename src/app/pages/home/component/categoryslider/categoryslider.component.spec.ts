import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysliderComponent } from './categoryslider.component';

describe('CategorysliderComponent', () => {
  let component: CategorysliderComponent;
  let fixture: ComponentFixture<CategorysliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorysliderComponent]
    });
    fixture = TestBed.createComponent(CategorysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
