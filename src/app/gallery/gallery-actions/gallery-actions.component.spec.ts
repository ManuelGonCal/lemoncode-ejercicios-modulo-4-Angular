import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryActionsComponent } from './gallery-actions.component';

describe('GalleryActionsComponent', () => {
  let component: GalleryActionsComponent;
  let fixture: ComponentFixture<GalleryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
