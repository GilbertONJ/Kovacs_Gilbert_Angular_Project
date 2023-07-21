import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingToListenComponent } from './willing-to-listen.component';

describe('WillingToListenComponent', () => {
  let component: WillingToListenComponent;
  let fixture: ComponentFixture<WillingToListenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WillingToListenComponent]
    });
    fixture = TestBed.createComponent(WillingToListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
