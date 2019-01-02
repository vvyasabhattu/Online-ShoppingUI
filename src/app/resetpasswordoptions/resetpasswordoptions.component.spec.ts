import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordoptionsComponent } from './resetpasswordoptions.component';

describe('ResetpasswordoptionsComponent', () => {
  let component: ResetpasswordoptionsComponent;
  let fixture: ComponentFixture<ResetpasswordoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpasswordoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
