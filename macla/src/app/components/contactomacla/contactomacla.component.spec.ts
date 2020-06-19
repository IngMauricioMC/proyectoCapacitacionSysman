import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactomaclaComponent } from './contactomacla.component';

describe('ContactomaclaComponent', () => {
  let component: ContactomaclaComponent;
  let fixture: ComponentFixture<ContactomaclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactomaclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactomaclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
