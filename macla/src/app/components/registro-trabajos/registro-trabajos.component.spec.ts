import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTrabajosComponent } from './registro-trabajos.component';

describe('RegistroTrabajosComponent', () => {
  let component: RegistroTrabajosComponent;
  let fixture: ComponentFixture<RegistroTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
