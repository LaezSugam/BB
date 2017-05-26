import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbLandingComponent } from './bb-landing.component';

describe('BbLandingComponent', () => {
  let component: BbLandingComponent;
  let fixture: ComponentFixture<BbLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
