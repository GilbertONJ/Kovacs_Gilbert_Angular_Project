import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeSongComponent } from './all-time-song.component';

describe('AllTimeSongComponent', () => {
  let component: AllTimeSongComponent;
  let fixture: ComponentFixture<AllTimeSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeSongComponent]
    });
    fixture = TestBed.createComponent(AllTimeSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
