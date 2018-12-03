import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressprofileComponent } from './addressprofile.component';

describe('AddressprofileComponent', () => {
  let component: AddressprofileComponent;
  let fixture: ComponentFixture<AddressprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
