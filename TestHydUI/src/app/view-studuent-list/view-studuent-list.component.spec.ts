import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStuduentListComponent } from './view-studuent-list.component';

describe('ViewStuduentListComponent', () => {
  let component: ViewStuduentListComponent;
  let fixture: ComponentFixture<ViewStuduentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStuduentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStuduentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
