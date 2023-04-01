import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetialsComponent } from './viewdetials.component';

describe('ViewdetialsComponent', () => {
  let component: ViewdetialsComponent;
  let fixture: ComponentFixture<ViewdetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
