import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailuserComponent } from './gmailuser.component';

describe('GmailuserComponent', () => {
  let component: GmailuserComponent;
  let fixture: ComponentFixture<GmailuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
