import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingToWatchComponent } from './willing-to-watch.component';

describe('WillingToWatchComponent', () => {
  let component: WillingToWatchComponent;
  let fixture: ComponentFixture<WillingToWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WillingToWatchComponent]
    });
    fixture = TestBed.createComponent(WillingToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
