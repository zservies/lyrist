import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLyricsComponent } from './create-lyrics.component';

describe('CreateLyricsComponent', () => {
  let component: CreateLyricsComponent;
  let fixture: ComponentFixture<CreateLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
