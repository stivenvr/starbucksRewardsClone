import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerolandingComponent } from './herolanding.component';

describe('HerolandingComponent', () => {
  let component: HerolandingComponent;
  let fixture: ComponentFixture<HerolandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerolandingComponent]
    });
    fixture = TestBed.createComponent(HerolandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
