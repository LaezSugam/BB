import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbQuizComponent } from './bb-quiz.component';

describe('BbQuizComponent', () => {
  let component: BbQuizComponent;
  let fixture: ComponentFixture<BbQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
