import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingToWatchSeriesComponent } from './willing-to-watch-series.component';

describe('WillingToWatchSeriesComponent', () => {
  let component: WillingToWatchSeriesComponent;
  let fixture: ComponentFixture<WillingToWatchSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WillingToWatchSeriesComponent]
    });
    fixture = TestBed.createComponent(WillingToWatchSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
