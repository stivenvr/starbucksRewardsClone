import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollheaderComponent } from './scrollheader.component';

describe('ScrollheaderComponent', () => {
  let component: ScrollheaderComponent;
  let fixture: ComponentFixture<ScrollheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollheaderComponent]
    });
    fixture = TestBed.createComponent(ScrollheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
