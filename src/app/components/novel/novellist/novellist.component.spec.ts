import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovellistComponent } from './novellist.component';

describe('NovellistComponent', () => {
  let component: NovellistComponent;
  let fixture: ComponentFixture<NovellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
