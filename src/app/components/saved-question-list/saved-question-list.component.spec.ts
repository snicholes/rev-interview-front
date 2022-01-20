import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedQuestionListComponent } from './saved-question-list.component';

describe('SavedQuestionListComponent', () => {
  let component: SavedQuestionListComponent;
  let fixture: ComponentFixture<SavedQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedQuestionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
