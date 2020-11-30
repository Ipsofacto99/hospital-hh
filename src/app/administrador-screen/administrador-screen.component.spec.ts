import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorScreenComponent } from './administrador-screen.component';

describe('AdministradorScreenComponent', () => {
  let component: AdministradorScreenComponent;
  let fixture: ComponentFixture<AdministradorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
