import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbQuestionComponent } from './bb-question.component';

describe('BbQuestionComponent', () => {
  let component: BbQuestionComponent;
  let fixture: ComponentFixture<BbQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
