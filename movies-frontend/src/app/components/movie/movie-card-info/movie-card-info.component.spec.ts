import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardInfoComponent } from './movie-card-info.component';

describe('MovieCardInfoComponent', () => {
  let component: MovieCardInfoComponent;
  let fixture: ComponentFixture<MovieCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
