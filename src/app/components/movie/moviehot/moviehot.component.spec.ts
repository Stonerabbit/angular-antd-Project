import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviehotComponent } from './moviehot.component';

describe('MoviehotComponent', () => {
  let component: MoviehotComponent;
  let fixture: ComponentFixture<MoviehotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviehotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviehotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
