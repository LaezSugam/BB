import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbLoginComponent } from './bb-login.component';

describe('BbLoginComponent', () => {
  let component: BbLoginComponent;
  let fixture: ComponentFixture<BbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
