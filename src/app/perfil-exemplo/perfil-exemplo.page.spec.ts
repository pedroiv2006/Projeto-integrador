import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PerfilExemploPage } from './perfil-exemplo.page';

describe('PerfilExemploPage', () => {
  let component: PerfilExemploPage;
  let fixture: ComponentFixture<PerfilExemploPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilExemploPage ],
      imports: [ IonicModule.forRoot() ]  // Importa o módulo Ionic
    }).compileComponents();  // Compila os componentes

    fixture = TestBed.createComponent(PerfilExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

