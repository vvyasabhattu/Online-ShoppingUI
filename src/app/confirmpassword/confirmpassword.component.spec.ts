import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmpasswordComponent } from './confirmpassword.component';

describe('ConfirmpasswordComponent', () => {
  let component: ConfirmpasswordComponent;
  let fixture: ComponentFixture<ConfirmpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
