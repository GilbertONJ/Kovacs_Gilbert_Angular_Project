import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeSeriesComponent } from './all-time-series.component';

describe('AllTimeSeriesComponent', () => {
  let component: AllTimeSeriesComponent;
  let fixture: ComponentFixture<AllTimeSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeSeriesComponent]
    });
    fixture = TestBed.createComponent(AllTimeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
