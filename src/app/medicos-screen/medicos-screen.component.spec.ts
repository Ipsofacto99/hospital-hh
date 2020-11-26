import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosScreenComponent } from './medicos-screen.component';

describe('MedicosScreenComponent', () => {
  let component: MedicosScreenComponent;
  let fixture: ComponentFixture<MedicosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
