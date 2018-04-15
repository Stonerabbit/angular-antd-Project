import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelhomeComponent } from './novelhome.component';

describe('NovelhomeComponent', () => {
  let component: NovelhomeComponent;
  let fixture: ComponentFixture<NovelhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
