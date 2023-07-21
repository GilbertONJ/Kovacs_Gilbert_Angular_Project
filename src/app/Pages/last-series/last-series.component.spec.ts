import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSeriesComponent } from './last-series.component';

describe('LastSeriesComponent', () => {
  let component: LastSeriesComponent;
  let fixture: ComponentFixture<LastSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSeriesComponent]
    });
    fixture = TestBed.createComponent(LastSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
