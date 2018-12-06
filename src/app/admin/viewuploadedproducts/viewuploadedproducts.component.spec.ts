import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuploadedproductsComponent } from './viewuploadedproducts.component';

describe('ViewuploadedproductsComponent', () => {
  let component: ViewuploadedproductsComponent;
  let fixture: ComponentFixture<ViewuploadedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuploadedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuploadedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
