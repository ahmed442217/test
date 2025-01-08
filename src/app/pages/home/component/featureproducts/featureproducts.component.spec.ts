import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureproductsComponent } from './featureproducts.component';

describe('FeatureproductsComponent', () => {
  let component: FeatureproductsComponent;
  let fixture: ComponentFixture<FeatureproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureproductsComponent]
    });
    fixture = TestBed.createComponent(FeatureproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
