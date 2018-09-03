import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploaderModalComponent } from './photo-uploader-modal.component';

describe('PhotoUploaderModalComponent', () => {
  let component: PhotoUploaderModalComponent;
  let fixture: ComponentFixture<PhotoUploaderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploaderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
