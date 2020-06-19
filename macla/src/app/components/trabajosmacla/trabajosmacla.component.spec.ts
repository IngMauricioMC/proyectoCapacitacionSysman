import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosmaclaComponent } from './trabajosmacla.component';

describe('TrabajosmaclaComponent', () => {
  let component: TrabajosmaclaComponent;
  let fixture: ComponentFixture<TrabajosmaclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajosmaclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosmaclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
