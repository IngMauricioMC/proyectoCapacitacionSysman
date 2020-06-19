import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosmaclaComponent } from './serviciosmacla.component';

describe('ServiciosmaclaComponent', () => {
  let component: ServiciosmaclaComponent;
  let fixture: ComponentFixture<ServiciosmaclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosmaclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosmaclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
