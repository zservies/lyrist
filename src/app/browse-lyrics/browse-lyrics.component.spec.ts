import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseLyricsComponent } from './browse-lyrics.component';

describe('BrowseLyricsComponent', () => {
  let component: BrowseLyricsComponent;
  let fixture: ComponentFixture<BrowseLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
