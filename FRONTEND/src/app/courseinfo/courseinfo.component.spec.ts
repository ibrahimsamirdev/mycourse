import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfoComponent } from './courseinfo.component';

describe('CourseinfoComponent', () => {
  let component: CourseinfoComponent;
  let fixture: ComponentFixture<CourseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
