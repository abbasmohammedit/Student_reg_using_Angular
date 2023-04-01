import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerrorComponent } from './viewerror.component';

describe('ViewerrorComponent', () => {
  let component: ViewerrorComponent;
  let fixture: ComponentFixture<ViewerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
