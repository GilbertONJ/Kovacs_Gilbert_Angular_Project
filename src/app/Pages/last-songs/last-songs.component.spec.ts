import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSongsComponent } from './last-songs.component';

describe('LastSongsComponent', () => {
  let component: LastSongsComponent;
  let fixture: ComponentFixture<LastSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSongsComponent]
    });
    fixture = TestBed.createComponent(LastSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
