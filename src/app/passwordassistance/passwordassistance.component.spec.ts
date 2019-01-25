import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordassistanceComponent } from './passwordassistance.component';

describe('PasswordassistanceComponent', () => {
  let component: PasswordassistanceComponent;
  let fixture: ComponentFixture<PasswordassistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordassistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordassistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
