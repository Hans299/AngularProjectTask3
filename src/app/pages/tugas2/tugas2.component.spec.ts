import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tugas2Component } from './tugas2.component';

describe('Tugas2Component', () => {
  let component: Tugas2Component;
  let fixture: ComponentFixture<Tugas2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tugas2Component]
    });
    fixture = TestBed.createComponent(Tugas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
