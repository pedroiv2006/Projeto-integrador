import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreExemploPage } from './sobre-exemplo.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SobreExemploPage', () => {
  let component: SobreExemploPage;
  let fixture: ComponentFixture<SobreExemploPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreExemploPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ignora elementos personalizados
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
