import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelhotComponent } from './novelhot.component';

describe('NovelhotComponent', () => {
  let component: NovelhotComponent;
  let fixture: ComponentFixture<NovelhotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelhotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelhotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
