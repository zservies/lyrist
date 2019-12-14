import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLyricsComponent } from './categories-lyrics.component';

describe('CategoriesLyricsComponent', () => {
  let component: CategoriesLyricsComponent;
  let fixture: ComponentFixture<CategoriesLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
