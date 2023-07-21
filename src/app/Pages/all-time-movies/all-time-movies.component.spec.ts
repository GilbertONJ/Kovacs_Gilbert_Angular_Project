import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeMoviesComponent } from './all-time-movies.component';

describe('AllTimeMoviesComponent', () => {
  let component: AllTimeMoviesComponent;
  let fixture: ComponentFixture<AllTimeMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeMoviesComponent]
    });
    fixture = TestBed.createComponent(AllTimeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
